import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import NotifIcon from '@material-ui/icons/NotificationsOutlined';
import AlarmIcon from '@material-ui/icons/NotificationImportantTwoTone';

export const NotifList = withStyles({
  notif: {
    width: '70px',
    height: '70px',
    float: 'right',
    position: 'relative',
    position: 'inline-block',
    '&':{
      float: 'right',
      color: '#f2f2f2',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '50px',
      '&:hover':{
        backgroundColor: '#ddd',
        color: 'black',
      },
      '&:active':{ // unsure if necessary
        backgroundColor: '#247BA0',
        color: 'white',
      }
    }
  },
  list: {
    height: '50px',
    width: '100px',
    zIndex: '90000',
  },
  listItem: {
    fontSize: '1em',
    '&':{
      backgroundColor: '#f2f2f2',
      color: 'black',
      textAlign: 'left',
      textDecoration: 'none',

      '&:hover':{
        backgroundColor: '#247BA0',
        color: 'white',
      }
    },
  }
})(class NotifList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      notifs: [
        {
          id: 0,
          severity: 2,
          name: 'Interior Camera',
          locationName: '23 Kelly Street, Kensington',
          read: false,
        }, {
          id: 1,
          severity: 0,
          name: 'Outerior Camera',
          locationName: 'Central Station',
          read: false,
        }
      ]
    }
  }

  generateText(item) {
    // Danger detected
    if (item.status) {
      return "Potential incident at " + item.name + " at " + item.locationName
    }
      " has noted an alarming incident."
    return item.name + " at " + item.locationName + " marked safe."
  }

  hasNotifs = () => {
    return (this.state.notifs.filter((item) => !item.read).length > 0)
  }

  handleClick = event => {
    if (this.hasNotifs()) {
      this.setState({ anchorEl: event.currentTarget });
    }
  };

  handleClose = () => {
    for (const item of this.state.notifs) {
      item.read = true
    }
    this.setState({ anchorEl: null });
  };

  render() {
    const{anchorEl, notifs} = this.state
    return (
      <div style={{marginLeft: 'auto'}}>
        <Button
          className={this.props.classes.notif}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.hasNotifs() ? <AlarmIcon/> : <NotifIcon/>}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {notifs
            .filter((item) => !item.read)
            .map((item) => (
              <MenuItem className={this.props.classes.listItem} key={item.id}>{this.generateText(item)}</MenuItem>
          ))}
        </Menu>
      </div>
    );

  }
})
