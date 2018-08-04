import { observable, computed, action, autorun } from 'mobx';
import firebase from './firebase';

const camerasRef = firebase.firestore().collection('cameras');
const eventsRef = firebase.firestore().collection('events');


class State {
  constructor() {
    this.cameras = observable([]);
    this.events = observable([]);
    this.unsubscribeCameras = camerasRef.onSnapshot(this.onCamerasUpdate);
    this.unsubscribeEvents = eventsRef.onSnapshot(this.onEventsUpdate);
    autorun(() => console.log(`Cameras length: ${this.cameras.length}`));
    autorun(() => console.log(`Events length: ${this.events.length}`))
  }

  onCamerasUpdate = (snapshot) => {
    const cameras = snapshot.docs.map((docSnapshot) => ({
      ...docSnapshot.data(),
      id: docSnapshot.id
    }));
    this.cameras.length = 0;
    this.cameras.push(...cameras);
  };

  onEventsUpdate = (snapshot) => {
    const events = snapshot.docs.map((docSnapshot) => ({
      ...docSnapshot.data(), 
      id: docSnapshot.id
    }));
    this.events.length = 0;
    this.events.push(...events);
  };

  cameraEvents = computed(() => (
    this.events.map(event => {
      let matchingCamera = this.cameras.filter(camera => camera.id === event.cameraId);
      return {
        ...event,
        camera: matchingCamera[0]
      }
    })
  ))
}

export default new State();