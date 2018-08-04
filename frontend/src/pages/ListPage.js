import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Feeds from "../components/Feeds";
import ListPageOptions from "../components/ListPageOptions";

//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

let feeds = [];
for(let i = 0; i < 10; i++){
  feeds.push({id: i, description: 'location '+String(i)})
}

let options = [];
for(let i = 0; i < 5; i++){
  options.push({title: 'option '+String(i)})
}

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div style={{position: 'relative', display: 'flex', overflow: 'hidden'}}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <ListPageOptions options={options}/>
      </Drawer>
      <main style={{flexGrow: 1, padding: '5px', backgroundColor: 'whitesmoke'}}>
        <Feeds feeds={feeds}/>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
/*
import React, { Component } from 'react';
import FeedsList from "../components/FeedsList";

let feeds = [];
for(let i = 0; i < 10; i++){
  feeds.push({id: i, description: 'location '+String(i)})
}

class ListPage extends Component {
  render() {
    return (
      <div>
        <FeedsList feeds={feeds}/>
      </div>
    )
  }
}

export default ListPage*/