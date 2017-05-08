// react
import React from 'react';
import ReactDOM from 'react-dom';
// material
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// internal
import App from './App';
// css
import './index.css';

injectTapEventPlugin();

const AppWithTheme = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <AppWithTheme />,
  document.getElementById('root')
);
