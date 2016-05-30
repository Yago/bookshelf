/*
  App
*/

import React      from 'react';
import ReactFire  from 'reactfire';
import reactMixin from 'react-mixin';
import firebase   from 'firebase';
import config     from './../config.json';

firebase.initializeApp(config.firebase);

import Bookshelf    from './Bookshelf.jsx';
import AddBook      from './AddBook.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books : []
    };
  }

  componentWillMount() {
    const firebaseRef = firebase.database().ref('books');
    this.bindAsArray(firebaseRef, 'books');
  }

  addBook(book) {
    this.firebaseRefs['books'].push(book);
  }

  updateBook(book) {
    this.firebaseRefs['books'].child(book.key).update(book);
  }

  removeBook(key) {
    this.firebaseRefs['books'].child(key).remove();
  }

  render() {
    return (
      <div>
        <div className="container">
          <Bookshelf
            books={this.state.books}
            removeBook={this.removeBook.bind(this)}
            updateBook={this.updateBook.bind(this)} />
        </div>
        <div className="sidebar">
          <div className="sidebar-content">
            <AddBook addBook={this.addBook.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

reactMixin.onClass(App, ReactFire);

export default App;
