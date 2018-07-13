import React from 'react';
import './bookCard.css';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: (this.props.like === 0) ? 'grey' : 'red',
    };
    this.handleLikes = this.handleLikes.bind(this);
  }

  handleLikes(event) {
    const [likes, books_id, author] = event.target.id.split(',');
    const likeStatus = Number(likes);
    const color = likeStatus === 1 ? 'grey':'red';
    fetch(`/like/${booksId}`).then(()=>{
      this.setState({ color });
    })
  }

  render() {
    return (
      <div className="bookcard-main">
        <div className="bookCard-image-container">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
            alt="BookImage"
            className="bookCard-image"
          />
        </div>
        <div className="like-icon">
          <i
            className="material-icons"
            style={{ background: this.state.color }}
            onClick={this.handleLikes}
            id={`${this.props.like},${this.props.bookId},${this.props.author}`}
          >favorite
          </i>
        </div>
        <div className="bookCard-name">{this.props.Name}</div>
        <div className="bookCard-rating">{this.props.rating}</div>
        <div className="bookCard-author">{this.props.author}</div>
      </div>
    );
  }
}

export default BookCard;
