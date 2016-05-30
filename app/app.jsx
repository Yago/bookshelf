import React              from 'react';
import ReactDOM           from 'react-dom';

import Container    from './components/Container.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
