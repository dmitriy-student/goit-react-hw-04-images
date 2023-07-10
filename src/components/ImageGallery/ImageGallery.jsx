import { useState, useEffect } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';

export default function ImageGallery({ request, page, HandleStatusChange }) {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(null);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  // const [error, setError] = useState(null);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }

    setImages([]);
    setTotal(null);
    HandleStatusChange('pending');

    fetch(
      `https://pixabay.com/api/?q=${request}&page=${page}&key=36188192-df3cf63ec6f6149d9f5656270&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Ooops...'));
      })
      .then(images => setImages(images.hits), setTotal(images.total))
      .catch(error => console.log('error :>> ', error))
      .finally(() => HandleStatusChange('resolve'));
  }, [request, page]);

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
