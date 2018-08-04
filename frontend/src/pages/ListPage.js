import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Feeds from "../components/Feeds";
import ListPageOptions from "../components/ListPageOptions";

const drawerWidth = 240;

let feeds = [];
for(let i = 0; i < 10; i++){
  feeds.push({id: i, description: 'location '+String(i)})
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

function ListPage(props) {
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

ListPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListPage);
