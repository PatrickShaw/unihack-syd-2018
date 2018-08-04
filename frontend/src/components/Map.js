import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { autorun, observable } from 'mobx';
import { observer } from 'mobx-react';

import { mapsState } from '../state/googleMapsReady';

const google = window.google;
export const Map = observer(withStyles({
  mapContainer: { 
    width: '100%',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh'
  }
})(class Map extends Component {
  constructor(props) {
    super(props);
    this.mapState = observable({
      googleMap: null,
    });
  }

  componentDidMount() {
    autorun(() => {
      console.log(`Google maps API state: ${mapsState.mapsIsReady}`);
      if (mapsState.mapsIsReady) {
        console.log(google);
        this.mapState.googleMap = new google.maps.Map(this.mapContainer, {
          center: {lat: -37.81950134905335, lng: 144.98429111204815},
          zoom: 8
        });         
      }
    })
  }

  render() {
    return (
      <div
        className={this.props.classes.mapContainer}
        ref={(mapContainer) => { this.mapContainer = mapContainer; }}
      >
      </div>
    );
  }
}));