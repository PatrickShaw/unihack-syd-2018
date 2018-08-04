import { observer } from "mobx-react";
import { observable, computed, action, autorun } from 'mobx';
import firebase from './firebase';

class State {
  constructor() {
    this.cameras = observable(firebase.firestore().collection('cameras'));
    this.events = observable([]);
    autorun(() => {
      console.log(`You now have ${this.videoStuff.length}`);
    });
  }

  cameraEvents = computed(() => (
    this.events.forEach(event => {
      let matchingCamera = this.cameras(camera => camera.id === event.data.cameraId);
      return Object.assign({}, event, {camera: matchingCamera});
    })
  ))
}

export default State;