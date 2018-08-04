import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { VideoPage } from './pages/VideoPage';
import { ErrorPage } from './pages/ErrorPage';
import ListPage from './pages/ListPage';
import { ContentContainer }  from './components/ContentContainer';
import { CssBaseline } from '../node_modules/@material-ui/core';

export const App = withStyles({
  app: {
    width: '100%',
    height: '100vh'
  },
  fadeEnter: {
    opacity: 0,
    zIndex: 1
  },
  fadeEnter: {
    '&fadeEnterActive': {
      opacity: 1,
      transition: 'opacity 250ms ease-in'
    }
  }
})(class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <div className={this.props.classes.app}>
          <ContentContainer>
            <TransitionGroup>
              <CSSTransition key={location.key} className={this.props.classes.fade} timeout={200}>
                <Switch>
                  <Route path='/map' component={MapPage}/>
                  <Route path='/list' component={ListPage}/>
                  <Route path='/cctv' render={() => <VideoPage
                      videoTitle="Swag"
                      video={{
                        title: 'Camera 1',
                        subheader: '23 Kings Street',
                        src: 'rick.mp4',
                      }}
                    />}/>
                  <Route path='/home' component={HomePage}/>
                  <Route exact path='/' component={HomePage}/>
                  <Route path='/' component={ErrorPage}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </ContentContainer>
        </div>
      )}/>
    );
  }
});
