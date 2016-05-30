/*
  Book
*/

import React        from 'react';
import classNames   from 'classnames';


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

  componentWillMount() {
    this.isFlipped = false;
  }

  toggleForm() {
    this.isFlipped = this.isFlipped ? false : true;
  }

  render() {
    const key = this.props.book['.key'];

    const bookClasses = classNames({
      'book': true,
      'flipped': this.isFlipped
    });

    return (
      <div className={bookClasses}>
        <div className="book-inner">
          <div className="book-front">
            {this.props.book.title}
            <button className="btn btn-xs btn-danger" onClick={this.props.removeBook.bind(null, key)}>&times;</button>
            <br/>
          </div>
          <div className="book-back">
            <form>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
