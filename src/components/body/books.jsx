import React from 'react';
import BookCard from './bookCard';
import './books.css';
import './displayBooks.css';

const AuthorCard = ({ bookDetails, toggleLikes }) => (
  <BookCard
    name={bookDetails.name}
    rating={bookDetails.rating}
    like={bookDetails.like}
    author={bookDetails.author}
    bookId={bookDetails.bookId}
    toggleLikes={toggleLikes}
  />
);

const DisplayBooks = (booksStorage, toggleLikes) => Object.keys(booksStorage).map(index => (
  <AuthorCard
    bookDetails={booksStorage[index]}
    key={booksStorage[index].bookId}
    toggleLikes={toggleLikes}
  />

));

const Books = ({ booksStorage, toggleLikes }) => {
  const retObject = DisplayBooks(booksStorage, toggleLikes);
  return (
    <div className="books-contentsPane">
      {retObject}
    </div>
  );
};

export default Books;
