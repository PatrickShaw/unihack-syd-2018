import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Map } from '../components/Map';

export const MapPage = withStyles({
  mapContainer: {
    display: 'flex'
  }
})(class MapPage extends Component {
  render() {
    return (
      
      <div className={this.props.classes.mapContainer}>
        <Map/>
      </div>
    )
  }
});