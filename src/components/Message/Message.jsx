import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return <h1>No results found for {this.props.request}</h1>;
  }
}
