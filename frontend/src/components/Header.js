import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Logo from './img/arkangel_logo.svg';
export const Header = withStyles({

})(class extends Component { 
  render() {
    return (
      <header>
        <img src={Logo}/>
      </header>
    );
  }
})