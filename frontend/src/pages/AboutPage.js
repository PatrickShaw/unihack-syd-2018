import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import SliderImg from '../img/commute.jpg';

export const AboutPage = withStyles({
  about: {
    padding:'50px',
  },
})(class AboutPage extends Component {
  render() {
    return (
      <div className={this.props.classes.about}>
        <p>
          <h2>The Problem</h2>
          Last year, <a href='http://www.abs.gov.au/ausstats/abs@.nsf/Lookup/by%20Subject/4530.0~2016-17~Main%20Features~Physical%20assault%20~10000'>ABS Australia</a> reported 454,900 people aged 15 or over who have experienced at least one form of physical assault in Australia. 44% of these situations occurred outside the home. The use of CCTV has <a href='https://aic.gov.au/publications/tandi/tandi271'>expanded rapidly in public spaces</a>, however manual monitoring of cameras would still be not easily scalable.

          <h2>The Solution</h2>
          ArkAngel attempts to improve community safety and make the work of security personnel easier. The app scans live video feeds and detect levels of movement through a trained neural network. Wild violent movement can automatically alarm and notify authorities after a certain amount of time, or trigger brighter lights around the area to intimidate offenders.
          <br/><br/>
          Security personnel have access to a web app that displays CCTV cameras in a given area. The interface allows for a list view and a map view to allow users to easily filter and monitor over an area and prevent coordinated gangster attacks over regions.

          <h2>How It Works</h2>
          ArkAngel mainly uses a pre-trained neural network that detects violent movements.
          The website is built with a React frontend and a Python Flask backend.

          <h2>Challenges Faced</h2>
          - Various issues with the frontend after testing on different devices with different screen sizes. A lot of time wasted fixing different problems as they came up. <br/>
          - Training the neural network and finding relevant datasets

          <h2>Accomplishments</h2>
            Clean and functional user experience in the web app, with different responsive interfaces for users to manipulate CCTV information.

          <h2>What's Next for ArkAngel</h2>
          It would be possible to also consider audio input to determine the occurrence of an assault situation by checking sound frequencies and the duration of distressing sounds. Furthermore detecting threatening language could also improve the accuracy of the project.
        </p>
      </div>
    )
  }
});
