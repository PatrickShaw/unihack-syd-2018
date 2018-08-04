import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Logo from '../img/arkangel_png.png';
export const Header = withStyles({
  header: {
    paddingTop: '50px',
    paddingLeft: '35px',
    paddingBottom: '0px',
    height: '80px',
  },
  logo: {
    height: '60%',
    width: 'auto',
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
