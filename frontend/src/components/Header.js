import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Logo from '../img/arkangel_logo.svg';
export const Header = withStyles({
  header: {
    height: '128px'
  },
  logo: {
    height: '100%',
    width: 'auto'
  }
})(class Header extends Component { 
  render() {
    return (
      <div className={this.props.classes.header}>
        <img src={Logo} className={this.props.classes.logo}/>
      </div>
    );
  }
})