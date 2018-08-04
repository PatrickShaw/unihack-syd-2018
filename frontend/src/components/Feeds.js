import React, {Component} from 'react';
import FeedsList from './FeedsList';
import { Input, InputAdornment, Icon } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Feeds extends Component {
  constructor(props){
    super(props);
    this.state = {feeds: props.feeds, search: ""}
  }

  componentWillReceiveProps(nextProps){
    this.setState({feeds: nextProps.feeds});
  }

  onSearch = (e) => this.setState({search: e.target.value});

  getMatching(){
    return this.state.feeds.filter(feed => feed.data.name.toLowerCase()
      .startsWith(this.state.search.toLowerCase()));
  }

  render() {
    return (
      <div>
        <Input
          style={{width: '98%', margin: '10px'}}
          id="adornment-weight"
          placeholder='Search'
          onChange={(e) => this.onSearch(e)}
          endAdornment={
            <InputAdornment position="end">
              <Icon><SearchIcon/></Icon>
            </InputAdornment>}
          inputProps={{
            'aria-label': 'Weight',
          }}
        />
        <FeedsList feeds={this.getMatching()}/>
      </div>
    )
  }
}

export default Feeds