import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

export const ErrorPage = withStyles({

})(class ErrorPage extends Component { 
  render() {
    return (
      <div>
        <h1>Error 404</h1>
      </div>
    )
  }
})