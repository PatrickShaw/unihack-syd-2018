import React, {Component} from 'react';
import { observer } from "mobx-react";
import withStyles from '@material-ui/core/styles/withStyles';

import FeedCard from './FeedCard';

export default withStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))'
  }
})(observer(class FeedsList extends Component {
  constructor(props){
    super(props);
    this.state = {feeds: props.feeds}
  }

  componentWillReceiveProps(nextProps){
    this.setState({feeds: nextProps.feeds});
  }

  generateList(){
    return (
      this.state.feeds.map((item, index) => (
        <FeedCard key={index} feedItem={item}/>
      ))
    )
  }

  render() {
    return (
      <div className={this.props.classes.grid}>
        {this.generateList()}
      </div>
    )
  }
}))
