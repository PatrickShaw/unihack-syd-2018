import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Map } from '../components/Map';

const LabelThing = ({label, value}) => (
  value ?   <p><strong>{label}</strong>{value ? ` ${value}` : ''}</p> : null
)

export const VideoPage = withStyles({
  video: {
    maxHeight: '400px'
  }
})(class VideoPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.video.title}</h1>
        <video className={this.props.classes.video} control>
          <source src={this.props.video.src} type="video/mp4"/>
        </video>
        <LabelThing name={'Status'} value={this.props.status}/>
        
      </div>
    );
  }
})