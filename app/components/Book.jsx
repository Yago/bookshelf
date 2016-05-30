/*
  Book
*/

import React        from 'react';
import classNames   from 'classnames';


class Book extends React.Component {
  constructor() {
    super();

    this.state = {
      isFlipped: false
    };
  }

  handleBookUpdate(event) {
    const book = {
      key : this.props.book['.key'],
      title : this.refs.title.value,
      cover : this.refs.cover.value,
      author : this.refs.author.value,
      year : this.refs.year.value
    };

    this.props.updateBook(book);
  }

  toggleBook() {
    this.state.isFlipped = this.state.isFlipped ? false : true;
    this.setState({
      isFlipped : this.state.isFlipped
    });
  }

  render() {
    const key = this.props.book['.key'];

    const bookClasses = classNames({
      'book': true,
      'flipped': this.state.isFlipped
    });

    return (
      <div className={bookClasses}>
        <div className="book-inner">

          <div className="book-front">
            <img src={this.props.book.cover} alt={this.props.book.title} className="img-responsive"/>
            <div className="book-informations">
              <h3>{this.props.book.title}</h3>
              <p>
                <small>{this.props.book.author} - {this.props.book.year}</small>
              </p>
              <div>
                <button className="btn btn-sm btn-link" onClick={this.toggleBook.bind(this)}>
                  <i className="glyphicon glyphicon-pencil"></i>
                </button>
                <button className="btn btn-sm btn-link" onClick={this.props.removeBook.bind(null, key)}>
                  <i className="glyphicon glyphicon-trash"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="book-back">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref="title"
                value={this.props.book.title}
                onChange={this.handleBookUpdate.bind(this)} />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref="cover"
                value={this.props.book.cover}
                onChange={this.handleBookUpdate.bind(this)} />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref="author"
                value={this.props.book.author}
                onChange={this.handleBookUpdate.bind(this)} />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref="year"
                value={this.props.book.year}
                onChange={this.handleBookUpdate.bind(this)} />
            </div>
            <button className="btn btn-sm btn-success" onClick={this.toggleBook.bind(this)}>
              <i className="glyphicon glyphicon-thumbs-up"></i> Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
