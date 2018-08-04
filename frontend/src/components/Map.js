import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { autorun, observable } from 'mobx';
import { observer } from 'mobx-react';

import { mapsState } from '../state/googleMapsReady';

function severityToColor(severity) {
  const blueness = Math.max(0, Math.min(1, severity));
  // 0-255, how white/black the grey tone will be.
  const baseGreyTone = 220;
  const greyRange = 210;
  const blueOffset = 35;
  const blue = Math.round(baseGreyTone + blueOffset);
  const red = Math.round(baseGreyTone - greyRange * blueness);
  const green = Math.round((baseGreyTone + blueOffset * 0.25) - greyRange * blueness);
  const blueHex = this.padZeroes(green.toString(16), 2);
  const redHex = this.padZeroes(red.toString(16), 2);
  const greenHex = this.padZeroes(blue.toString(16), 2);
  const colorHex = `${redHex}${greenHex}${blueHex}`;
  return colorHex;
}

let google = undefined;
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
    this.markers = observable([]);
  }

  filterMarkers = () => {
    if (this.mapState.mapsIsReady) {
      this.markers.length = 0;
      this.props.events.forEach(event => {
        const markerIcon = {
          url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + severityToColor(event.severity)
        };
        const marker = new google.maps.Marker({
          position: event.camera.location,
          map: this.googleMap,
          title: event.camera.locationName
        })
        marker.setIcon(markerIcon);
        this.markers.push(marker);
      });  
      
    }
  }

  componentDidMount() {
    autorun(() => {
      console.log(`Google maps API state: ${mapsState.mapsIsReady}`);
      if (mapsState.mapsIsReady) {
        google = window.google;
        
        console.log(google);
        this.mapState.googleMap = new google.maps.Map(this.mapContainer, {
          center: {lat:  -33.8819068, lng: 151.1952068},
          zoom: 19,
          styles: [
            {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.fill',
              stylers: [{color: '#8f7d77'}]
            },
            {
              featureType: 'transit.line',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#ebe3cd'}]
            },
          ]
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