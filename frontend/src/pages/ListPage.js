import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import Feeds from "../components/Feeds";
import ListPageOptions from "../components/ListPageOptions";
import state from '../state';
import { observer } from "mobx-react";

import ViewIcon from '../img/circular-map.png';

const drawerWidth = 240;

let options = [{title: 'Location'}, {title: 'Activity'}, {title: 'Importance'}];

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  viewButton: {
    position: 'fixed',
    height: '70px',
    maxHeight: '100%',
    bottom: '30px',
    right: '40px',
  },
  buttonText: {
    padding: '5px',
    color: 'black',
    align: 'center',
    fontSize: '1.15em',
    fontFamily: 'waukegan',
    position: 'fixed',
    right: '30px',
    bottom: '105px',
  }
});

class ListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fetching: false,
      feeds: []
    }
  }

  // Switches to Map mode
  switchMap = () => {
    this.props.history.push("/map")
  }

  render() {
    return (
      <div style={{position: 'relative', display: 'flex', overflow: 'hidden'}}>
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar}/>
          <List>
            <ListItem>
              <ListItemText primary="Filters"/>
            </ListItem>
          </List>
          <Divider/>
          <ListPageOptions options={options}/>
        </Drawer>
        <main style={{flexGrow: 1, padding: '5px', backgroundColor: 'whitesmoke'}}>
          <Feeds feeds={state.cameras} fetching={this.state.fetching}/>
        </main>
        <div className={this.props.classes.buttonText}>Map Mode</div>
        <img onClick={this.switchMap} src={ViewIcon} className={this.props.classes.viewButton}
        title="Change Views"></img>
      </div>
    );
  }
}

ListPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(ListPage));
