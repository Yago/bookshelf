/*
  Book
*/

import React            from 'react';

class Book extends React.Component {
  handleBookUpdate(event) {
    const book = {
      key : this.props.book['.key'],
      title : this.refs.title.value,
      author : this.refs.author.value,
      year : this.refs.year.value
    };

    this.props.updateBook(book);
  }

  render() {
    const key = this.props.book['.key'];

    return (
      <div>
        {this.props.book.title}
        <button className="btn btn-xs btn-danger" onClick={this.props.removeBook.bind(null, key)}>&times;</button>
        <br/>
        <input
          type="text"
          className="form-control"
          ref="title"
          value={this.props.book.title}
          onChange={this.handleBookUpdate.bind(this)} />
        <input
          type="text"
          className="form-control"
          ref="author"
          value={this.props.book.author}
          onChange={this.handleBookUpdate.bind(this)} />
        <input
          type="text"
          className="form-control"
          ref="year"
          value={this.props.book.year}
          onChange={this.handleBookUpdate.bind(this)} />
      </div>
    );
  }
}

export default Book;
