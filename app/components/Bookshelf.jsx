/*
  Bookshelf
*/

import React   from 'react';
import Book    from './Book.jsx';

class Bookshelf extends React.Component {
  render() {
    const books = this.props.books.map((book, key) => {
      return (
        <div className="col-xs-6 col-sm-3 col-md-2" key={key}>
          <Book
            book={book}
            bookKey={key}
            removeBook={this.props.removeBook}
            updateBook={this.props.updateBook} />
        </div>
      );
    });

    return (
      <div>
        <div className="spacer spacer-sm"></div>
        <h1 className="text-center">
          My Bookshelf
          <button className="btn btn-success" onClick={this.props.toggleSidebar}>
            <i className="glyphicon glyphicon-plus"></i>
          </button>
        </h1>
        <div className="spacer spacer-md"></div>
        <div className="row">
          {books}
        </div>
      </div>
    );
  }
}

export default Bookshelf;
