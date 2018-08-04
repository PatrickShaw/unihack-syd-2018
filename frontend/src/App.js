import React, { Component } from 'react';

import { MapPage } from './pages/MapPage';
import { Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={MapPage}/>
      </div>
    );
  }
}
