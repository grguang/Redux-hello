import React, { PropTypes } from 'react'
import store from '../store.js';

class CommentBox extends React.Component {
  constructor(){
    super()
    this.state={
      comments:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault()
    store.dispatch({type:'ADD_COMMENT',author:this.refs.author.value,content:this.refs.content.value})
    this.setState({
      comments:store.getState()
    })
    this.refs.commentForm.reset();
  }
  render () {
    let list = this.state.comments.map((item,index) =>
      <div className="comment" key={index}><span>{item.author}</span>： <span>{item.content}</span></div>
    )
    return(
      <div className="comment-box">
        {list}
        <form onSubmit={this.handleSubmit.bind(this)} ref='commentForm' className='comment-form'>
          <label>作者</label><input type="text" className='input' ref='author'></input><br />
          <label>内容</label><input type="text" className='input' ref='content'></input>
          <button className='submit-btn' type="submit">提交</button>
        </form>
        <div className='underline1'></div>
        <div className='underline2'></div>
      </div>
    )
  }
}

export default CommentBox;
