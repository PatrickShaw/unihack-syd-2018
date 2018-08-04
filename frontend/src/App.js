import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { MapPage } from './pages/MapPage';
import { ListPage } from './pages/ListPage';
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
          <Route exact path='/List' component={ListPage}/>
        </ContentContainer>
      </div>
    );
  }
});
