import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';
import state from '../state.js';

class VideoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      cameraId: props.cameraId,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({cameraId: nextProps.cameraId})
  }

  getCamera(){
    return state.cameras.find(camera => camera.id === this.state.cameraId);
  }

  getEvents(){
    return state.events.filter(event => event.cameraId === this.state.cameraId);
  }

  render() {
    console.log(this.getCamera());
    return (
      <div>
        <VideoCard
          camera={this.getCamera()}
          events={this.getEvents()}
          video={this.props.video}
        />
      </div>
    );
  }
}

export default VideoPage;
