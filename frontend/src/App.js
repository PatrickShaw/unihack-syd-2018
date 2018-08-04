import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { ListPage } from './pages/ListPage';
import { VideoPage } from './pages/VideoPage';
import { ErrorPage } from './pages/ErrorPage';
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
          <Switch>
            <Route path='/map' component={MapPage}/>
            <Route path='/list' component={ListPage}/>
            <Route path='/cctv' render={() => <VideoPage
                videoTitle="Swag"
                video={{
                  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                }}
              />}/>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/' component={ErrorPage}/>
          </Switch>
        </ContentContainer>
      </div>
    );
  }
});
