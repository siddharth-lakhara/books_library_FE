import React from 'react';
import BookCard from './bookCard';
import './books.css';
import './displayBooks.css';

const AuthorCard = ({ authorBooksArray, author})=>{
  return (
    Object.keys(authorBooksArray).map(BookElem => (
      <BookCard
        className="bookCard-display"
        Name={authorBooksArray[BookElem].Name}
        rating={authorBooksArray[BookElem].rating}
        like={authorBooksArray[BookElem].like}
        author={author}
        bookId={authorBooksArray[BookElem].books_id}
      />
    ))
  );
}

const DisplayBooks = (booksStorage)=>{
  return Object.keys(booksStorage).map(authorProp => (
    <div className="displayBooks-main">
      <div className="displayBook-author">
        {authorProp}
      </div>
      <div className="displayBook-cardContainer">
        <AuthorCard
          authorBooksArray={booksStorage[authorProp]}
          author={authorProp}
        />
      </div>
    </div>
  ));
}

const Books = ({ booksStorage }) => {
  retObject = DisplayBooks(booksStorage);
  return (
    <div className="books-contentsPane">
      {retObject}
    </div>
  );
}

export default Books;
