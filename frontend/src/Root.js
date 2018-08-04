import React, { Component } from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

import {App} from './App';
export class Root extends Component { 
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme({})}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}