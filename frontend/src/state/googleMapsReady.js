import { observable, action } from 'mobx';
export const mapsState = observable({
  mapsIsReady: false
});
// Worst hack ever
const tick = setInterval(action(() => {
  if (window.mapsIsReady()) {
    mapsState.mapsIsReady = true;  
    clearInterval(tick);
  }
}), 200);