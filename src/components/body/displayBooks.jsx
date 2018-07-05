import React, { Component } from 'react';
import AuthorCard from './authorCard';
import './displayBooks.css';

class DisplayBooks extends Component {
  render() {
    const bookObject = this.props.booksStorage;
    return Object.keys(bookObject).map(authorProp => (
      <div className="displayBooks-main">
        <div className="displayBook-author">
          {authorProp}
        </div>
        <div className="displayBook-cardContainer">
          <AuthorCard
            authorBooksArray={bookObject[authorProp]}
            author={authorProp}
          />
        </div>
      </div>
    ));
  }
}

export default DisplayBooks;
