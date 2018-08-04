import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import LuggageSlider from '../img/adult-airport-arrival.jpg';

export const HomePage = withStyles({
  slider: {
    height: '60%',
    width: '100%'
  },
  slogan: {
    height: '100px'
  }
})(class HomePage extends Component {
  render() {
    return (
      <img src={LuggageSlider} className={this.props.classes.slider}/>
      <div className={this.props.classes.slogan}>
        "Community Safety. Our first priority."
      </div>
    )
  }
});
