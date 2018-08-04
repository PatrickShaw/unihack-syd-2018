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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Spinner from 'react-spinkit';
import VideoCardHistory from './VideoCardHistory';
import classnames from 'classnames';
import { observer } from "mobx-react";

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
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

    console.log(this.state.events);
    return (
      <Card style={{margin: '20px auto', maxWidth: '1000px'}}>
        <CardHeader
          title={this.state.camera.name}
          subheader={'Latitude: '+this.state.camera.location._lat+'; Longitude: '+this.state.camera.location._long}
        />
        <video controls width='100%'>
          <source src={this.state.video.src} type="video/mp4"/>
        </video>
        <CardContent>
          <Typography component="p">
            {this.state.camera.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
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