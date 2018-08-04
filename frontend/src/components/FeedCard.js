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
    <div>
      <Card
        style={{margin: '10px', minWidth: '100px', height: '350px', position: 'relative'}}
      >
        <div style={{textAlign:'center', fontFamily:'waukegan'}}>
          <CardHeader
            title={props.feedItem.name} onClick={()=>history.push(CCTV+'/'+props.feedItem.id)}
            subheader={'Latitude: '+props.feedItem.location._lat+'; Longitude: '+props.feedItem.location._long}
          />
        </div>
        <video controls width='100%'>
          <source src={'rick.mp4'} type="video/mp4"/>
        </video>
        <CardContent>
          <Typography component="p" style={{fontSize:'14px'}}>
            {props.feedItem.description}
          </Typography>
        </CardContent>
        <div style={{display: 'flex', justifyContent: 'center', width:'100%'}}>
          <CardActions style={{position: 'absolute', bottom: '5px'}}>
            <Button size="small" color="primary" onClick={()=>history.push(CCTV+'/'+props.feedItem.id)}>
              View
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

FeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(FeedCard);
