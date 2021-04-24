import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Root from './pages/root';
import './index.css';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#9200FB',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
