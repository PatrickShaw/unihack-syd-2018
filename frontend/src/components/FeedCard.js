import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function FeedCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} style={{margin: '10px', minWidth: '100px'}}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Camera {props.feedItem.id}
          </Typography>
          <Typography component="p">
            {props.feedItem.description}
          </Typography>
        </CardContent>
        <CardActions>
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