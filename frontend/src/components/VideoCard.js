import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlarmIcon from '@material-ui/icons/NotificationImportant';
import Button from '@material-ui/core/Button';
import Spinner from 'react-spinkit';
import classnames from 'classnames';
import { observer } from "mobx-react";

import { GoogleMap } from './GoogleMap';
import VideoCardHistory from './VideoCardHistory';

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
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class VideoCard extends Component {
  constructor(props){
    super(props);
    this.state = { expanded: false, video: props.video, fetching: props.fetching, camera: props.camera, events: props.events}
  }

  componentWillReceiveProps(nextProps){
    this.setState({video: nextProps.video, fetching: nextProps.fetching, camera: nextProps.camera, events: nextProps.events});
  }

  handleExpandClick = () => {
    this.setState(({ expanded: !this.state.expanded }));
  };

  render() {
    if(this.state.fetching){
      return (<Spinner name='double-bounce' />
      )
    }
    const { classes } = this.props;

    return (
      <Card style={{margin: '20px auto', maxWidth: '1000px'}}>
        <CardHeader
          title={this.state.camera.name}
          subheader={'Latitude: '+this.state.camera.location._lat+'; Longitude: '+this.state.camera.location._long}
        />
        <CardContent>
          <Typography component="p">
            {this.state.camera.description}
          </Typography>
        </CardContent>
        <video controls width='100%'>
          <source src={this.state.video.src} type="video/mp4"/>
        </video>
        <GoogleMap cameraEvents={this.props.events.map(event => ({ ...event, camera: this.props.camera}))}/>
        <CardActions className={classes.actions} disableActionSpacing>
          <div className={this.props.classes.center}>
            <Button text-align="center" variant="contained"  color='primary' aria-label="Notify" className={classes.button}>
              <AlarmIcon className={classes.extendedIcon} />
              Notify Authorities
            </Button>
          </div>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>

        </CardActions>
        <VideoCardHistory expanded={this.state.expanded} history={this.state.events}/>
      </Card>
    );
  }
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(observer(VideoCard));