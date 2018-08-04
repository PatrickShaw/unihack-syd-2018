import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

export const Navbar = withStyles({
  topNav: {
    backgroundColor: '#000000',
    height: '70px',
    overflow: 'hidden',
    '& a':{
      float: 'left',
      color: '#f2f2f2',
      textAlign: 'center',
      padding: '25px 30px',
      textDecoration: 'none',
      fontFamily: 'waukegan-bold',
      fontSize: '1.7em',

      '&:hover':{
        backgroundColor: '#ddd',
        color: 'black',
      },

      '&:active':{
        backgroundColor: '#247BA0',
        color: 'white',
      }

    },
  },
})(class Navbar extends Component {
  render() {
    return (
      <div className={this.props.classes.topNav}>
        <Link className='active' to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
      </div>
    );
  }
})
