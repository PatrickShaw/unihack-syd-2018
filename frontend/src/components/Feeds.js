import React, {Component} from 'react';
import FeedsList from './FeedsList';
import { Input, InputAdornment, Icon } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Fuse from 'fuse.js';
import { observer } from "mobx-react";

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
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name"
      ]
    };
    if(this.state.search === ""){
      return this.state.feeds;
    }
    let fuse = new Fuse(this.state.feeds, options); // "list" is the item array
    return fuse.search(this.state.search);
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

export default observer(Feeds)