import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';
import firebase from '../firebase.js';

class VideoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      cameraId: props.cameraId,
      fetchingCamera: false,
      fetchingEvents: false
    }
  }

  componentWillReceiveProps(next){

  }

  render() {
    console.log(this.state.cameraId)
    return (
      <div>
        <VideoCard
          video={this.props.video}
        />
      </div>
    );
  }
}

export default VideoPage;
