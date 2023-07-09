import { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import css from './SearchBar.module.css';

export default function SearchBar({ handleSearchRequest }) {
  const [request, setRequest] = useState('');

  const handleRequeatChange = event => {
    setRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (request.trim() === '') {
      alert('Введите запрос');
      return;
    }

    handleSearchRequest(request);
    setRequest('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <AiOutlineSearch size={20} />
        </button>

        <input
          className={css.SearchForm_input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={handleRequeatChange}
        />
      </form>
    </header>
  );
}
