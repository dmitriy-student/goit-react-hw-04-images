import { useReducer, useState } from 'react';

import css from './App.module.css';

import { fetchImages } from 'services/api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/SearchBar';

function countReducer(state, { type, value }) {
  if (type === 'increment') {
    return state + value;
  }
}

export default function App(params) {
  const [request, setRequest] = useState('');
  const [page, dispatchPage] = useReducer(countReducer, 1);
  const [status, setStatus] = useState('idle');
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(null);

  const handleSearchRequest = async request => {
    setRequest(request);
    setStatus('pending');

    try {
      const images = await fetchImages(request, page);
      if (page === 1) {
        setImages(images.hits);
      } else {
        setImages(prevState => [...prevState, ...images.hits]);
      }
      setTotal(images.total);
      setStatus('resolve');
    } catch (error) {
      setStatus('rejected');
    }
  };

  const handlePageChange = () => {
    dispatchPage({ type: 'increment', value: 1 });
    handleSearchRequest(request);
  };

  return (
    <div className={css.App}>
      <Searchbar handleSearchRequest={handleSearchRequest} />
      <ImageGallery request={request} images={images} total={total} />
      {status === 'pending' && <Loader />}
      {status === 'resolve' && <Button handlePageChange={handlePageChange} />}
    </div>
  );
}
