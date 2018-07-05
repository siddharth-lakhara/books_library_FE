import React, { Component } from 'react';
import DisplayBooks from './displayBooks';
import './books.css';

class Books extends Component {
  render() {
    return (
      <div className="books-contentsPane">
        <DisplayBooks />
      </div>
    );
  }
}

export default Books;
