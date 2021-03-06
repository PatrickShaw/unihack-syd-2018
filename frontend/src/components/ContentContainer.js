import React, { Component } from 'react';
import { Header } from './Header';
import AppNavBar from './AppNavBar';
import { Footer } from './Footer';
import withStyles from '@material-ui/core/styles/withStyles';

// TODO: give this a better name
export const ContentContainer = withStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  dontScale: {
    flexGrow: 0,
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    flexShrink: 1
  }
})(class ContentContainer extends Component {
  render() {
    return (
      <div className={this.props.classes.container}>
        <header className={this.props.classes.dontScale}>
          <AppNavBar/>
        </header>
        <div className={this.props.classes.content}>
          {this.props.children}
        </div>
        <footer className={this.props.classes.dontScale}>
          <Footer/>
        </footer>
      </div>
    );
  }
});
