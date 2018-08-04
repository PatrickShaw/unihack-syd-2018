import React, { Component } from 'react';
import {App} from './App';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
const titleFamily = {
  fontFamily: ['waukegan', 'Roboto']
}
const bodyFamily = {
  fontFamily: ['Roboto']
}
const theme = createMuiTheme({
  palette: {
    primary: { main: '#2c8aff'},
    secondary: { main: '#4d41ac' }
  },
  typography: {
    display1: titleFamily,
    display2: titleFamily,
    display3: titleFamily,
    display4: titleFamily,
    headline: titleFamily,
    title: titleFamily,
    subheading: bodyFamily,
    body1: bodyFamily,
    body2: bodyFamily
  }
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