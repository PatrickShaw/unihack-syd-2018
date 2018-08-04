import React, { Component } from 'react';
import { tileLayer, map, LatLng, geoJSON } from 'leaflet';
export class Map extends Component {
  constructor(props) {
    super(props);
    this.tileLayer = tileLayer(
      'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; Seat.Me</a>'
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
        className="map-container"
        ref={(mapContainer) => { this.mapContainer = mapContainer; }}
      >
      </div>
    );
  }
}