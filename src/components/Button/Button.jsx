import React from 'react';
import css from './Button.module.css';

export default function Button({ handlePageChange }) {
  return (
    <div>
      <button className={css.Button} onClick={handlePageChange}>
        Load more
      </button>
    </div>
  );
}
