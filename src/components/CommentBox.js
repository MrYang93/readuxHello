import React from 'react';
import store from '../store.js'
import { connect } from 'react-redux';

class CommentBox extends React.Component{
  constructor(){
    super();
    this.state = {
      // comments: store.getState()
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log(store.getState());
    store.dispatch({type: 'ADD_COMMENT', comment: this.refs.inp.value, postId:  this.props.postId});
    // console.log(store.getState());
    this.refs.commentForm.reset(); //清空输入的内容
    // this.setState({comments: store.getState()});


    // let inp = this.refs.inp.value
    // let comment =  [...this.state.comments,inp]
    // console.log(comment);
    // this.setState({comments: comment})
  }

  render(){

    // this.props.data ---- :: 是 mapStateToProps --redux 来的

    console.log(this.props.data)
    let id = this.props.postId
    // console.log(id)
    let commentsList=this.props.data[id].map( (item,i) => <li key={i}> {item} </li> )
    console.log('Son rendering....')

    return(
      <div className="hello clearfix">
        <div className="pinglun">
          <ul>
            {commentsList}
          </ul>
          <form ref= "commentForm" onSubmit={this.handleSubmit.bind(this)} className="for">
            <input ref="inp" type='text' />
            <input type='submit'/>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.comments
});
// export default CommentBox;
export default connect(mapStateToProps)(CommentBox);
