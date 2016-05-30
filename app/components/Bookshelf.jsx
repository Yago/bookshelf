/*
  Bookshelf
*/

import React   from 'react';
import Book    from './Book.jsx';

class Bookshelf extends React.Component {
  render() {
    const books = this.props.books.map((book, key) => {
      return (
        <div className="col-sm-3">
          <Book
            key={key}
            book={book}
            bookKey={key}
            removeBook={this.props.removeBook}
            updateBook={this.props.updateBook} />
        </div>
      );
    });

    return (
      <div>
        <h3>Bookshelf</h3>
        <div className="row">
          {books}
        </div>
      </div>
    );
  }
}

export default Bookshelf;
