/*
  Container
*/

import React      from 'react';
import ReactFire  from 'reactfire';
import reactMixin from 'react-mixin';
import firebase   from 'firebase';
import config     from './../config.json';

firebase.initializeApp(config.firebase);

import Bookshelf    from './Bookshelf.jsx';

class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      books : []
    };
  }

  componentWillMount() {
    const firebaseRef = firebase.database().ref('books');
    this.bindAsArray(firebaseRef, 'books');
  }

  render() {
    return (
      <div className="container">
        <h1>Container here !</h1>
        <Bookshelf books={this.state.books} />
      </div>
    );
  }
}

reactMixin.onClass(Container, ReactFire);

export default Container;
