import React, { Component } from 'react';

import css from './App.module.css';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/SearchBar';

export default class App extends Component {
  state = {
    request: '',
    page: 1,
    status: 'idle',
  };

  handleSearchRequest = request => {
    this.setState({ request });
  };

  handlePageChange = () => {
    this.setState({ page: this.state.page + 1 });
  };

  HandleStatusChange = newStatus => {
    this.setState({ status: newStatus });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar handleSearchRequest={this.handleSearchRequest} />
        <ImageGallery
          HandleStatusChange={this.HandleStatusChange}
          request={this.state.request}
          page={this.state.page}
        />
        {this.state.status === 'pending' && <Loader />}
        {this.state.status === 'resolve' && (
          <Button handlePageChange={this.handlePageChange} />
        )}
      </div>
    );
  }
}
