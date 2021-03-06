import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import AlarmIcon from '@material-ui/icons/NotificationImportant';

import Button from '@material-ui/core/Button';
import Spinner from 'react-spinkit';
import classnames from 'classnames';
import { observer } from "mobx-react";
import GpsFixed from '@material-ui/icons/GpsFixed';
import GpsNotFixed from '@material-ui/icons/GpsNotFixed';
import IconButton from '@material-ui/core/IconButton';

import { severityToColor } from '../severityToColor';
import axios from 'axios';
import { GoogleMap } from  './GoogleMap';
import VideoCardHistory from './VideoCardHistory';

const messagingServiceUrl = 'https://2ef753f8.ngrok.io/';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    align: 'center',
    textAlign: 'center',
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
    expandOpen: {
  },
  avatar: {
    backgroundColor: red[500],
  },
});



class VideoCard extends Component {
  constructor(props){
    super(props);
    this.state = { notified: false, expanded: false, video: props.video, fetching: props.fetching, camera: props.camera, events: props.events}
  }

  componentDidMount() {
    this.rawr.playbackRate = 0.1;
  }

  componentWillReceiveProps(nextProps){
    this.setState({video: nextProps.video, fetching: nextProps.fetching, camera: nextProps.camera, events: nextProps.events});
  }

  handleExpandClick = () => {
    this.setState(({ expanded: !this.state.expanded }));
  };

  sendNotification(){
    this.setState({notified: true});
    let message = "Manual alert for camera: "+this.state.camera.name+" at Latitude: "+this.state.camera.location._lat+"; Longitude: "+this.state.camera.location._long;
    axios.post(messagingServiceUrl, {message: message})
  }

  render() {
    if(this.state.fetching){
      return (<Spinner name='double-bounce' />
      )
    }
    const { classes } = this.props;
    const recentEvents = this.state.events.filter((event) => {
      const dayBefore = new Date();
      dayBefore.setDate(dayBefore.getDate() - 1);
      return event.time >= dayBefore;
    });
    let mostRecentEvent = undefined;
    if(recentEvents.length > 0) {
      mostRecentEvent = recentEvents[0];
    }

    let otherActions;

    if(!this.state.notified){
      otherActions = (
        <Button onClick={()=>this.sendNotification()} text-align="center" variant="contained"  color='primary' aria-label="Notify" className={classes.button}>
          <AlarmIcon className={classes.extendedIcon} />
          Notify Authorities
        </Button>
      )
    } else {
      otherActions = (
        <Button disabled text-align="center" variant="contained"  color='primary' aria-label="Notify" className={classes.button}>
          <AlarmIcon className={classes.extendedIcon} />
          Notify Authorities
        </Button>
      )
    }

    return (
      <Card style={{margin: '20px auto', maxWidth: '1000px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <CardHeader
            title={this.state.camera.name}
            style={{flexGrow: 1, flexShrink: 1}}
            subheader={'Latitude: '+this.state.camera.location._lat+'; Longitude: '+this.state.camera.location._long}
          />
          <div style={{marginRight: '10px'}}>
          {mostRecentEvent ? <IconButton><GpsFixed style={{color: `#${severityToColor(mostRecentEvent.severity)}`}}/></IconButton> : <IconButton><GpsNotFixed/></IconButton>}
          </div>
        </div>
        <CardContent>
          <Typography component="p">
            {this.state.camera.description}
          </Typography>
        </CardContent>
        <video ref={(r) => this.rawr = r} controls={false} autoPlay muted loop width='100%'>
          <source src={this.props.src} type="video/mp4"/>
        </video>

        <div style={{display: 'flex'}}>
          <div style={{width: '50%', maxWidth: '50%', flexGrow: 0.5, flexShrink: 0.5}}>
            <GoogleMap height='300px' navToEvent={{
              lat: this.props.camera.location._lat,
              lng: this.props.camera.location._lng
            }} cameraEvents={this.props.events.map(event => ({ ...event, camera: this.props.camera}))}/>
          </div>
          <div style={{width: '50%', maxWidth: '50%', flexGrow: 0.5, flexShrink: 0.5}}>
            <VideoCardHistory expanded={this.state.expanded} history={this.state.events}/>
          </div>
        </div>
        <CardActions className={classes.actions} disableActionSpacing>
          <div className={classes.center}>
            {otherActions}
          </div>
        </CardActions>
      </Card>
    );
  }
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(VideoCard));
