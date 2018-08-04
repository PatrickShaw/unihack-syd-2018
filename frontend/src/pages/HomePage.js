import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import SliderImg from '../img/commute.jpg';

export const HomePage = withStyles({
  slider: {
    objectFit: 'cover',
    objectPosition: 'center',
    maxHeight: '40vh',
    width: '100%'
  },
  slogan: {
    fontFamily: 'waukegan',
    fontSize:'3rem'
  }
})(class HomePage extends Component {
  render() {
    return (
      <div>
        <img src={SliderImg} className={this.props.classes.slider}/>
        <p className={this.props.classes.slogan}>
          Community Safety. Our first priority.
        </p>
      </div>
    )
  }
});
