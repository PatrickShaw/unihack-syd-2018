import React, { Component } from 'react';
import FeedsList from "../components/FeedsList";

let feeds = [];
for(let i = 0; i < 10; i++){
  feeds.push({id: i, description: 'location '+String(i)})
}

class ListPage extends Component {
  render() {
    return (
      <div>
        <FeedsList feeds={feeds}/>
      </div>
    )
  }
}

export default ListPage