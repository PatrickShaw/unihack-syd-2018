import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Feeds from "../components/Feeds";
import ListPageOptions from "../components/ListPageOptions";
import firebase from '../firebase.js';

const drawerWidth = 240;

let feeds = [];
for(let i = 0; i < 10; i++){
  feeds.push({id: i, data: {location: '1'+String(i)+' Kings Street', description: 'East side atrium, 2nd floor', name: 'Camera '+String(i)}})
}

let options = [];
for(let i = 0; i < 10; i++){
  options.push({title: 'option '+String(i)})
}

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
    console.log(this.state.feeds);
    return (
      <div style={{position: 'relative', display: 'flex', overflow: 'hidden'}}>
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar}/>
          <ListPageOptions options={options}/>
        </Drawer>
        <main style={{flexGrow: 1, padding: '5px', backgroundColor: 'whitesmoke'}}>
          <Feeds feeds={this.state.feeds} fetching={this.state.fetching}/>
        </main>
      </div>
    );
  }

  onColUpdate = (snapshot) => {
    const feeds = snapshot.docs.map((docSnapshot) => ({
      id: docSnapshot.id,
      data: docSnapshot.data()
    }));
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
