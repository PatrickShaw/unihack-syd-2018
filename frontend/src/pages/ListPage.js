import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import Feeds from "../components/Feeds";
import ListPageOptions from "../components/ListPageOptions";
import firebase from '../firebase.js';
//import State from '../state';

const drawerWidth = 240;

let options = [{title: 'Location'}, {title: 'Activity'}, {title: 'Importance'}];

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

class ListPage extends Component{
  constructor(props){
    super(props);
    this.colRef = firebase.firestore().collection('cameras');
    this.state = {
      fetching: false,
      feeds: []
    }
  }

  componentDidMount() {
    this.unsubscribeCol = this.colRef.onSnapshot(this.onColUpdate);
    this.setState({fetching: true});
  }
  componentWillUnmount() {
    this.unsubscribeCol();
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
          <Feeds feeds={this.state.feeds} fetching={this.state.fetching}/>
        </main>
      </div>
    );
  }

  onColUpdate = (snapshot) => {
    const feeds = snapshot.docs.map((docSnapshot) => (Object.assign({},
      docSnapshot.data(),
      {id: docSnapshot.id},
      {latitude: docSnapshot.data().location._lat, longitude: docSnapshot.data().location._long},
      {location: undefined}
    )));
    this.setState({
      feeds: feeds,
      fetching: false
    });
  };
}

ListPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListPage);
