import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function FeedCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card
        className={classes.card}
        style={{margin: '10px', minWidth: '100px', height: '350px', position: 'relative'}}
      >
        <CardHeader
          title={props.feedItem.data.name}
          subheader={props.feedItem.data.location}
        />
        <video controls width='100%'>
          <source src={'rick.mp4'} type="video/mp4"/>
        </video>
        <CardContent>
          <Typography component="p">
            {props.feedItem.data.description}
          </Typography>
        </CardContent>
        <CardActions style={{position: 'absolute', bottom: '5px'}}>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

FeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedCard);