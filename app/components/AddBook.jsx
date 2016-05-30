/*
  Add Book form
*/

import React from 'react';

class AddBook extends React.Component {
  createBook(event) {
    event.preventDefault();

    const book = {
      title : this.refs.title.value,
      author : this.refs.author.value,
      cover : this.refs.cover.value,
      year : this.refs.year.value
    };

    this.props.addBook(book);
    this.refs.bookForm.reset();
  }

  render() {
    return (
      <div>
        <h3>Add a new book</h3>
        <form ref="bookForm" onSubmit={this.createBook.bind(this)}>
          <div className="form-group">
            <input type="text" ref="title" className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text" ref="cover" className="form-control" placeholder="Cover url"/>
          </div>
          <div className="form-group">
            <input type="text" ref="author" className="form-control" placeholder="Author"/>
          </div>
          <div className="form-group">
            <input type="number" ref="year" className="form-control" placeholder="Year"/>
          </div>
          <button type="submit" className="btn btn-info">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
