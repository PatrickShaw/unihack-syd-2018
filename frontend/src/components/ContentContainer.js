import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import withStyles from '@material-ui/core/styles/withStyles';

// TODO: give this a better name
export const ContentContainer = withStyles({
  container: {
    display: 'flex'
  }
})(class extends Component { 
  render() {
    return (
      <div>
        <Header/>
          <div className={this.props.classes.container}>
          {
            this.props.children
          }
          </div>
        <Footer/>
      </div>
    );
  }
});