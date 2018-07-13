import React from 'react';
import SideBar from './components/sidebar';
import Header from './components/header';
import Books from './components/body/books';
import NoBooksPage from './components/body/NoBooks';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksStorage: {},
    };
    this.loadBooks = this.loadBooks.bind(this);
    this.updateBooks = this.updateBooks.bind(this);
    this.toggleLikes = this.toggleLikes.bind(this);
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    fetch('/fetch')
      .then(response => response.json())
      .then((booksStorage) => {
        this.setState({ booksStorage });
      });
  }

  updateBooks() {
    fetch('/update').then(() => {
      this.loadBooks();
    });
  }

  toggleLikes(bookId) {
    const { booksStorage } = this.state;
    booksStorage.reduce((prev, curr, index) => {
      if (curr.bookId === Number(bookId)) {
        curr.like = curr.like === 1 ? 0 : 1;
        booksStorage[index] = curr;
      }
      return {};
    }, {});
    this.setState({ booksStorage });
  }

  render() {
    const { booksStorage } = this.state;
    if (Object.keys(booksStorage).length === 0) {
      return (
        <div className="App-Container">
          <SideBar updateBooks={this.updateBooks} />
          <div className="App-rightPane">
            <Header />
            <NoBooksPage updateBooks={this.updateBooks} />
          </div>
        </div>
      );
    }
    return (
      <div className="App-Container">
        <SideBar updateBooks={this.updateBooks} />
        <div className="App-rightPane">
          <Header />
          <Books
            booksStorage={booksStorage}
            toggleLikes={this.toggleLikes}
          />
        </div>
      </div>
    );
  }
}

export default App;
