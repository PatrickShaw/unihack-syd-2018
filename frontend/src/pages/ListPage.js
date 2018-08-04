import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemText, Tooltip, Button } from '@material-ui/core';
import Feeds from "../components/Feeds";
import ListPageOptions from "../components/ListPageOptions";
import state from '../state';
import { observer } from "mobx-react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const drawerWidth = 240;

let options = [{title: 'Location'}, {title: 'Activity'}, {title: 'Importance'}];

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  viewButton: {
    position: 'fixed',
    maxHeight: '100%',
    bottom: '30px',
    right: '40px'
  },
  listItem: {
    backgroundColor: theme.palette.secondary.main
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
  };

  render() {
    return (
      <div style={{position: 'relative', display: 'flex', overflow: 'hidden'}}>
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <List>
            <ListItem>
              <ListItemText primary="Filters"/>
            </ListItem>
          </List>
          <Divider/>
          <ListPageOptions options={options}/>
        </Drawer>
        <main style={{flexGrow: 1, padding: '15px', backgroundColor: 'whitesmoke'}}>
          <Feeds feeds={state.cameras} fetching={this.state.fetching}/>
        </main>
        <Tooltip disableFocusListener disableTouchListener title="Map View">
          <Button onClick={this.switchMap} color='secondary' variant='fab' className={this.props.classes.viewButton}>
            <LocationOnIcon />
          </Button>
        </Tooltip>
      </div>
    );
  }
}

ListPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(ListPage));
