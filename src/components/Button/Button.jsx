import React, { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className={css.Button} onClick={this.props.handlePageChange}>
          Load more
        </button>
      </div>
    );
  }
}
