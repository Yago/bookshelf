/*
  Bookshelf
*/

import React   from 'react';
import Book    from './Book.jsx';

class Bookshelf extends React.Component {
  renderBook(book, key) {
    return <Book key={key} book={book} />
  }

  render() {
    return (
      <div>
        <h3>Bookshelf</h3>
        { this.props.books.map(this.renderBook) }
      </div>
    );
  }
}

export default Bookshelf;
