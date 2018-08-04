import React, {Component} from 'react';
import FeedsList from './FeedsList';
import { Input, InputAdornment, Icon } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Feeds extends Component {
  constructor(props){
    super(props);
    this.state = {feeds: props.feeds}
  }

  render() {
    return (
      <div>
        <Input
          style={{width: '100%'}}
          id="adornment-weight"
          placeholder='Search'
          endAdornment={
            <InputAdornment position="end">
              <Icon><SearchIcon/></Icon>
            </InputAdornment>}
          inputProps={{
            'aria-label': 'Weight',
          }}
        />
        <FeedsList feeds={this.state.feeds}/>
      </div>
    )
  }
}

export default Feeds