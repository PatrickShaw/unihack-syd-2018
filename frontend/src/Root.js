import React, { Component } from 'react';
import {App} from './App';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8395b7'},
    secondary: { main: '#ead5be' }
  },
});

export class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}