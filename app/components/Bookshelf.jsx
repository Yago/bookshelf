/*
  Bookshelf
*/

import React   from 'react';
import Book    from './Book.jsx';

class Bookshelf extends React.Component {
  render() {
    const books = this.props.books.map((book, key) => {
      return (
        <Book
          key={key}
          book={book}
          bookKey={key}
          removeBook={this.props.removeBook}
          updateBook={this.props.updateBook} />
      );
    });

    return (
      <div>
        <h3>Bookshelf</h3>
        {books}
      </div>
    );
  }
}

export default Bookshelf;
