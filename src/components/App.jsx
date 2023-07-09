import { useState } from 'react';

import css from './App.module.css';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/SearchBar';

export default function App(params) {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const handleSearchRequest = request => {
    setRequest(request);
  };

  const handlePageChange = () => {
    setPage(per => per + 1);
  };

  const HandleStatusChange = newStatus => {
    setStatus(newStatus);
  };

  return (
    <div className={css.App}>
      <Searchbar handleSearchRequest={handleSearchRequest} />
      <ImageGallery
        HandleStatusChange={HandleStatusChange}
        request={request}
        page={page}
      />
      {status === 'pending' && <Loader />}
      {status === 'resolve' && <Button handlePageChange={handlePageChange} />}
    </div>
  );
}
