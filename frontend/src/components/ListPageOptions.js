import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListPageOptions(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {
          props.options.map((item, index) => (
            <ListItem key={index} button>
              <ListItemText primary={item.title} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
}

ListPageOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListPageOptions);