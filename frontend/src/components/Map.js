import React, { Component } from 'react';
import { tileLayer, map, LatLng, geoJSON } from 'leaflet';
import withStyles from '@material-ui/core/styles/withStyles';
export const Map = withStyles({
  mapContainer: {
    width: '100%',
    height: '100%'
  }
})(class Map extends Component {
  constructor(props) {
    super(props);
    this.tileLayer = tileLayer(
      'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ArkAngel'
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