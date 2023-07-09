import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  largeImageURL,
  imageUrl,
  tags,
  modalOpen,
}) {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        modalOpen(largeImageURL);
      }}
    >
      <img src={imageUrl} alt={tags} className={css.ImageGalleryItem_image} />
    </li>
  );
}
