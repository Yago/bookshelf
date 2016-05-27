import React              from 'react';
import ReactDOM           from 'react-dom';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

import Container    from './components/Container.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Container />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
