/*
  Add Book form
*/

import React from 'react';
import {TextField, RaisedButton} from 'material-ui';

class AddBook extends React.Component {
  submitAddBookForm() {
    console.log('asds');
  }

  render() {
    return (
      <div>
        <hr/>
        <h3>Add book from here</h3>
        <TextField hintText="Title" /><br/>
        <TextField hintText="Author" /><br/>
        <TextField hintText="Year" /><br/>
        <br/>
        <RaisedButton label="Add" primary={true} onClick={this.submitAddBookForm()} />
      </div>
    );
  }
}

export default AddBook;
