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
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    fetch('/fetch')
      .then(response => response.json())
      .then((booksStorage) => {
        console.log('response: ', booksStorage);
        this.setState({ booksStorage });
      });
  }

  updateBooks() {
    fetch('/update').then(() => {
      this.loadBooks();
    });
  }

  render() {
    const { booksStorage } = this.state;
    if (Object.keys(booksStorage).length === 0) {
      return (
        <div className="App-Container">
          <SideBar updateBooks={updateBooks} />
          <div className="App-rightPane">
            <Header />
            <NoBooksPage updateBooks={updateBooks} />
          </div>
        </div>
      );
    }
    return (
      <div className="App-Container">
        <SideBar updateBooks={updateBooks} />
        <div className="App-rightPane">
          <Header />
          <Books
            booksStorage={this.state.booksStorage}
          />
        </div>
      </div>
    );
  }
}

export default App;
