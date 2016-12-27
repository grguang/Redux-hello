import React, { PropTypes } from 'react'
import store from '../store.js';

class PostBody extends React.Component {
  constructor(){
    super()
    this.state={
      num:store.getState()
    }
  }
  render () {
    return(
      <div className="post-body">
        <div className="comment-num">
          {this.state.num.length}
        </div>
      </div>
    )
  }
}

export default PostBody;
