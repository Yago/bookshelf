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
      year : this.refs.year.value
    };

    this.props.addBook(book);
    this.refs.bookForm.reset();
  }

  render() {
    return (
      <div>
        <hr/>
        <h3>Add book from here</h3>
        <form ref="bookForm" onSubmit={this.createBook.bind(this)}>
          <div className="form-group">
            <input type="text" ref="title" className="form-control" placeholder="Title"/>
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
