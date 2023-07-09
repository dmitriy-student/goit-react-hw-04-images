import React, { Component } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import css from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    request: '',
  };

  handleRequeatChange = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.request.trim() === '') {
      alert('Введите запрос');
      return;
    }

    this.props.handleSearchRequest(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.request}
            onChange={this.handleRequeatChange}
          />
        </form>
      </header>
    );
  }
}
