import React, { Component } from 'react';
import { tileLayer, map, LatLng, geoJSON } from 'leaflet';
import withStyles from '@material-ui/core/styles/withStyles';

export const Map = withStyles({
  mapContainer: { 
    width: '100%'
  }
})(class Map extends Component {
  constructor(props) {
    super(props);
    this.tileLayer = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ArkAngel',
        id: 'mapbox.streets'
      }
    );
    this.roomLayer = geoJSON([], {});
  }

  componentDidMount() {
    this.map = map(this.mapContainer, {
      center: new LatLng(-38, 147),
      zoom: 18,
      maxZoom: 20
    });
    this.tileLayer.addTo(this.map);
    this.roomLayer.addTo(this.map);
  }

  render() {
    this.roomLayer.clearLayers();
    return (
      <div
        className={this.props.classes.mapContainer}
        ref={(mapContainer) => { this.mapContainer = mapContainer; }}
      >
      </div>
    );
  }
})