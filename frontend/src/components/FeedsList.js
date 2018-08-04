import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import FeedCard from './FeedCard';

class FeedsList extends Component {
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
        <Grid item xs={3} spacing={24}>
          <FeedCard key={index} feedItem={item}/>
        </Grid>
      ))
    )
  }

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          {this.generateList()}
        </Grid>
      </div>
    )
  }
}

export default FeedsList