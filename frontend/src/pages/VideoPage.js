import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Map } from '../components/Map';
import VideoCard from '../components/VideoCard';

const LabelThing = ({label, value}) => (
  value ?   <p><strong>{label}</strong>{value ? ` ${value}` : ''}</p> : null
);

export const VideoPage = withStyles({
  video: {
    maxHeight: '400px'
  }
})(class VideoPage extends Component {
  render() {
    return (
      <div>
        <VideoCard
          video={this.props.video}
        />
        <LabelThing name={'Status'} value={this.props.status}/>
        
      </div>
    );
  }
});
