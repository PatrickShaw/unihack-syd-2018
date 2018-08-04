import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NotifList } from './NotifList';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function AppNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>props.history.push('/home')}>Home</Button>
          <Button color="inherit" onClick={()=>props.history.push('/about')}>About</Button>
          <Button color="inherit" onClick={()=>props.history.push('/list')}>Demo</Button>
          <NotifList/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AppNavBar));