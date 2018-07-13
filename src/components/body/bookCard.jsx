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
    const [likes, booksId] = event.target.id.split(',');
    const likeStatus = Number(likes);
    const color = likeStatus === 1 ? 'grey' : 'red';
    fetch(`/like/${booksId}`).then((res) => {
      if (res.status === 200) {
        this.setState({ color });
        this.props.toggleLikes(booksId);
      } else {
        window.alert('Please check your network connection');
      }
    });
  }

  render() {
    const {
      name, rating, bookId, like, author,
    } = this.props;
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
            id={`${like},${bookId}`}
            role="button"
            tabIndex={0}
          >
            favorite
          </i>
        </div>
        <div className="bookCard-name">
          {name}
        </div>
        <div className="bookCard-rating">
          {rating}
        </div>
        <div className="bookCard-author">
          {author}
        </div>
      </div>
    );
  }
}

export default BookCard;
