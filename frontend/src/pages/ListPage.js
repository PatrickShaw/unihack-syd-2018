import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Map } from '../components/Map';

export const ListPage = withStyles({
  mapContainer: {
    display: 'flex'
  }
})(class ListPage extends Component {
  render() {
    return (

      <div className={this.props.classes.mapContainer}>
        <Map/>
      </div>
    )
  }
});