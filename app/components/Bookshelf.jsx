/*
  Bookshelf
*/

import React            from 'react';
import {RaisedButton}   from 'material-ui';

class Bookshelf extends React.Component {
  render() {
    return (
      <div>
        <h1>Bookshelf here !</h1>
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default Bookshelf;
