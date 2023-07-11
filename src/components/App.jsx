import { useReducer, useState } from 'react';

import css from './App.module.css';

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

  const handleSearchRequest = request => {
    setRequest(request);
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
  };

  const handlePageChange = () => {
    dispatchPage({ type: 'increment', value: 1 });
    handleSearchRequest(request);
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
        images={images}
        total={total}
      />
      {status === 'pending' && <Loader />}
      {status === 'resolve' && <Button handlePageChange={handlePageChange} />}
    </div>
  );
}
