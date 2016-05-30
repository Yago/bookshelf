/*
  App
*/

import React                from 'react';
import ReactFire            from 'reactfire';
import reactMixin           from 'react-mixin';
import CSSTransitionGroup   from 'react-addons-css-transition-group';
import firebase             from 'firebase';
import classNames           from 'classnames';
import config               from './../config.json';

firebase.initializeApp(config.firebase);

import Bookshelf    from './Bookshelf.jsx';
import AddBook      from './AddBook.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isSidebarOpen: false,
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
    if(confirm('Are you sure you want to remove this book ?!')) {
      this.firebaseRefs['books'].child(key).remove();
    }
  }

  toggleSidebar() {
    this.state.isSidebarOpen = this.state.isSidebarOpen ? false : true;
    this.setState({
      isSidebarOpen : this.state.isSidebarOpen
    });
  }

  render() {
    const sidebarClasses = classNames({
      'sidebar': true,
      'open': this.state.isSidebarOpen
    });

    return (
      <div>
        <div className="container">
          <Bookshelf
            books={this.state.books}
            removeBook={this.removeBook.bind(this)}
            updateBook={this.updateBook.bind(this)}
            toggleSidebar={this.toggleSidebar.bind(this)} />
        </div>
        <div className={sidebarClasses}>
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
