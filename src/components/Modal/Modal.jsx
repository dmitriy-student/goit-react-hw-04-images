import { useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ closeModalonESC, closeModal, largeImageURL }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModalonESC);

    return () => {
      window.removeEventListener('keydown', closeModalonESC);
    };
  }, []);

  return (
    <div className={css.Overlay} onClick={closeModal}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}
