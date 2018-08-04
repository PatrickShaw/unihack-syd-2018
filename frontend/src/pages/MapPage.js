import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Map } from '../components/Map';
import ViewIcon from '../img/circular-list.png';

export const MapPage = withStyles({
  viewButton: {
    position: 'fixed',
    height: '70px',
    maxHeight: '100%',
    bottom: '30px',
    right: '50px',
  },
  buttonText: {
    padding: '5px',
    color: 'black',
    align: 'center',
    fontSize: '1.15em',
    fontFamily: 'waukegan',
    position: 'fixed',
    right: '45px',
    bottom: '105px',
  }
})(class MapPage extends Component {

  // Switches to Map mode
  switchList = () => {
    this.props.history.push("/list")
  }

  render() {
    return (
      <div className={this.props.classes.mapContainer}>
        <Map/>
        <div className={this.props.classes.buttonText}>List Mode</div>
        <img onClick={this.switchList} src={ViewIcon} className={this.props.classes.viewButton}
        title="Change Views">
        </img>
      </div>
    )
  }
});
