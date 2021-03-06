import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import VideoPage from './pages/VideoPage';
import { ErrorPage } from './pages/ErrorPage';
import ListPage from './pages/ListPage';
import { ContentContainer }  from './components/ContentContainer';

export const App = withStyles({
  app: {
    width: '100%',
    height: '100vh'
  },
})(class App extends Component {
  render() {
    return (
      <div className={this.props.classes.app}>
        <ContentContainer>
          <Switch>
            <Route path='/about' component={AboutPage}/>
            <Route path='/map' component={MapPage}/>
            <Route path='/list' component={ListPage}/>
            <Route path='/cctv/:id' render={({match, location}) => (<VideoPage
              cameraId={match.params.id}
              video={{
                src: 'rick.mp4',
              }}
              location={location}
              match={match}
            />)}/>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/' component={ErrorPage}/>
          </Switch>
        </ContentContainer>
      </div>
    );
  }
});
