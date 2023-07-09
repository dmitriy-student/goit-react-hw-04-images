import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li
        className={css.ImageGalleryItem}
        onClick={() => {
          this.props.modalOpen(this.props.largeImageURL);
        }}
      >
        <img
          src={this.props.imageUrl}
          alt={this.props.tags}
          className={css.ImageGalleryItem_image}
        />
      </li>
    );
  }
}
