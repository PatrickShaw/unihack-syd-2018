import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { autorun, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';

import { mapsState } from '../state/googleMapsReady';
function padZeroes(value, digitCount) {
  while (value.length < digitCount) {
    value = `0${value}`;
  }
  return value;
}

function severityToColor(severity) {
  const redness = Math.max(0, Math.min(1, severity));
  // 0-255, how white/black the grey tone will be.
  const maxRed = 222;
  const baseGreyTone = 60;
  const greyRange = 40;
  const redOffset = 20;
  const redRange = maxRed - (baseGreyTone + redOffset);
  const blue = Math.round(baseGreyTone);
  const red = Math.round(redOffset + baseGreyTone + redRange * Math.sqrt(redness));
  const green = Math.round(baseGreyTone+ redRange * (1 - Math.sqrt(redness)));
  const blueHex = padZeroes(blue.toString(16), 2);
  const redHex = padZeroes(red.toString(16), 2);
  const greenHex = padZeroes(green.toString(16), 2);
  const colorHex = `${redHex}${greenHex}${blueHex}`;
  return colorHex;
}

function iconUrl(severity) {
  return 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + severityToColor(severity);
}

let google = undefined;
export const Mapz = observer(withStyles({
  mapContainer: { 
    width: '100%',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh'
  }
})(class Mapz extends Component {

  constructor(props) {
    super(props);
    this.markers = observable(new Map());
  }

  filterMarkers = () => {
    console.log('Filtering markers');
    if (this.googleMap) {
      console.log(toJS(this.props.cameraEvents));
      this.props.cameraEvents.forEach(event => {
        try {
          const cameraId = event.cameraId;
          let marker = undefined;
          const cameraLocation = event.camera.location;
          const latlng = new google.maps.LatLng(cameraLocation._lat, cameraLocation._long);
          if (!this.markers.has(cameraId)) {
            console.log(cameraLocation._lat);
            console.log(cameraLocation._long);
            marker = new google.maps.Marker({
              position: latlng,
              map: this.googleMap,
              title: event.camera.locationName,
              icon: iconUrl(event.severity)
            }); 
            marker.setMap(this.googleMap);
            this.markers.set(cameraId, marker);
            console.log(`Added ${cameraId} at ${cameraLocation._lat},${cameraLocation._long} to markers`);
          } else {
            marker = this.markers.get(cameraId);
            marker.setPosition(latlng);
          }
          const markerIcon = {
            url: iconUrl(event.severity)
          };
          marker.setIcon(markerIcon);
          console.log(severityToColor(event.severity));
        } catch(err) {
          console.error(err);
        }
      });  
    } else {
      console.log(`googleMap is currently ${this.googleMap}`);
    }
  }

  componentDidMount() {
    autorun(() => {
      console.log(`Google maps API state: ${mapsState.mapsIsReady}`);
      if (mapsState.mapsIsReady) {
        google = window.google;
        
        console.log(google);
        this.googleMap = new google.maps.Map(this.mapContainer, {
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
        this.filterMarkers();         
      }
    })
  }

  render() {
    this.filterMarkers();
    return (
      <div
        className={this.props.classes.mapContainer}
        ref={(mapContainer) => { this.mapContainer = mapContainer; }}
      >
      </div>
    );
  }
}));