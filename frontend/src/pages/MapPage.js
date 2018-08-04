import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {observer} from 'mobx-react';

import { Mapz } from '../components/Mapz';
import { Tooltip, Button } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';

import state from '../state';


export const MapPage = withStyles({
  viewButton: {
    position: 'fixed',
    maxHeight: '100%',
    bottom: '30px',
    right: '50px',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    padding: '5px',
    align: 'center',
    fontSize: '1.15em',
    fontFamily: 'waukegan',
    position: 'fixed',
    right: '45px',
    bottom: '105px',
  }
})(observer(class MapPage extends Component {

  // Switches to Map mode
  switchList = () => {
    this.props.history.push("/list")
  };

  render() {
    return (
      <div className={this.props.classes.mapContainer}>
        <Mapz events={state.cameraEvents.get()}/>
        <Tooltip disableFocusListener disableTouchListener title="List View">
          <Button onClick={this.switchList} variant='fab' className={this.props.classes.viewButton}>
            <ViewListIcon style={{color: 'white'}}/>
          </Button>
        </Tooltip>
      </div>
    )
  }
}));