import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { ListPage } from './pages/ListPage';
import { VideoPage } from './pages/VideoPage';
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
          <Route exact path='/List' component={ListPage}/>
          <Route path='/cctv' render={() => <VideoPage
              videoTitle="Swag"
              video={{
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              }}
            />}/>
        </ContentContainer>
      </div>
    );
  }
});
