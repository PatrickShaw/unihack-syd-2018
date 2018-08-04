import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

export const Footer = withStyles({
  footer: {
    backgroundColor: '#000000',
    position: 'fixed',
    height: '60px',
    padding: '30px',
    overflow: 'hidden',
    fontFamily: 'waukegan',
    color: '#ffffff',
    fontSize: '1.7em',
    textAlign: 'right',
  }
})(class Footer extends Component {
  render() {
    return (
      <p className={this.props.classes.footer}>
        Team JuicyGrapes
      </p>
    );
  }
});
