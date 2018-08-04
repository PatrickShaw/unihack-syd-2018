import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CCTV } from '../constants/routes';
import { withRouter } from 'react-router-dom';

function FeedCard(props) {
  const { history } = props;
  return (
      <Card>
        <div style={{fontFamily:'waukegan'}}>
          <CardHeader
            title={props.feedItem.name} onClick={()=>history.push(CCTV+'/'+props.feedItem.id)}
          />
        </div>
        <video playsinline controls autoplay loop width='100%'>
          <source src={'rick.mp4'} type="video/mp4"/>
        </video>
        <CardContent>
          <Typography component="p">
            {props.feedItem.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>history.push(CCTV+'/'+props.feedItem.id)}>
            View
          </Button>
        </CardActions>
      </Card>
  );
}

FeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(FeedCard);
