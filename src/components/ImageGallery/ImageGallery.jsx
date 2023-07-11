import { useState } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';

export default function ImageGallery({ request, total, images }) {
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const onOpenModal = largeImageURL => {
    setShowModal(true);
    setLargeImageUrl(largeImageURL);
  };

  // const handleChangeStateModal = () => {};

  const closeModalonESC = evt => {
    if (evt.code === 'Escape') {
      setShowModal(false);
    }
  };

  const closeModalonOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      {total === 0 && <Message request={request} />}
      <ul className={css.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
            modalOpen={onOpenModal}
          />
        ))}
      </ul>
      {showModal && (
        <Modal
          closeModal={closeModalonOverlay}
          closeModalonESC={closeModalonESC}
          largeImageURL={largeImageUrl}
        />
      )}
    </>
  );
}
