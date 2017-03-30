import React from 'react';
import CommentBox from './CommentBox.js';
import PostBody from './PostBody';

import {Provider} from 'react-redux';
import store from '../store.js'



class Post extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render(){

    return(
      //this.props.params.postId --- :: 是通过react-router 里面来的

      //需要用  Provider 包裹所有东西,为了让store暴露在connect中,让下面的组件中的connect有store数据
      <Provider store={store}>
        <div>
          <div className="top clearfix">
            <div className="header">
               <PostBody postId={ this.props.params.postId } />
            </div>
          </div>
          <div className="content">
            <CommentBox postId={ this.props.params.postId } className="cont-inner"/>
          </div>
        </div>
      </Provider>
    )
  }
}
export default Post;
