import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModalonESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModalonESC);
  }

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.closeModal}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
