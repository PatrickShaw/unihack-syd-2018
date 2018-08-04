import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { ContentContainer }  from './components/ContentContainer';

export const App = withStyles({
  app: {
    width: '100%',
    height: '100vh'
  }
})(class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <ContentContainer>
          <Route exact path='/' component={MapPage}/>
          <Route exact path='/home' component={HomePage}/>
        </ContentContainer>
      </div>
    );
  }
})
