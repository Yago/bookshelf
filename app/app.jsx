import React              from 'react';
import ReactDOM           from 'react-dom';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

import Bookshelf    from './components/Bookshelf.jsx';
import NotFound     from './components/NotFound.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Bookshelf />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
