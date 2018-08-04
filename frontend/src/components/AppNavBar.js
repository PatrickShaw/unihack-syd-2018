import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NotifList } from './NotifList';
import { withRouter } from 'react-router-dom';
import Logo from '../img/arkangel_png.png';

const styles = theme => ({
  button: {
    color: '#FFFFFF'
  },
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function AppNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
        <Toolbar>
          <img src={Logo} style={{width: '200px', marginRight: '50px'}}/>
          <Button color="inherit" className={classes.button}
          style={{fontFamily: 'waukegan-bold', fontSize: '1.1em'}}  onClick={()=>props.history.push('/home')}>Home</Button>
          <Button color="inherit" className={classes.button}
          style={{fontFamily: 'waukegan-bold', fontSize: '1.1em'}}  onClick={()=>props.history.push('/about')}>About</Button>
          <Button color="inherit" className={classes.button}
          style={{fontFamily: 'waukegan-bold', fontSize: '1.1em'}}
          onClick={()=>props.history.push('/list')}>Demo</Button>
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
