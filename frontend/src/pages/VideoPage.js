import React, {Component} from 'react';
import VideoCard from '../components/VideoCard';
import state from '../state.js';
import {observer} from "mobx-react";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraId: props.cameraId,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({cameraId: nextProps.cameraId})
  }

  getCamera = () => state.cameras.find(camera => camera.id === this.state.cameraId);

  getEvents = () => state.events.filter(event => event.cameraId === this.state.cameraId);

  render() {
    return (
      <div>
        <VideoCard
          camera={this.getCamera()}
          events={this.getEvents()}
          fetching={!this.getCamera() || !this.getEvents()}
          video={this.props.video}
          src={this.props.location.state.src}
        />
      </div>
    );
  }
}

export default observer(VideoPage);
