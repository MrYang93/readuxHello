import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';

class PostBody extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleClick(){
      store.dispatch({type: 'ADD_POSTS', postId:  this.props.postId})
    }

    render() {
        console.log(this.props.data);
        let id = this.props.postId
        //this.props.postId --- :: 是在<Porst/> 组件中 <PostBody postId= /> 来的
        return (
            <div className="post-body clearfix">
                <p className="comment-num" >
                    {this.props.data[id].length}
                </p>
                <p className="comment-num1" ref="Pval" onClick={this.handleClick.bind(this)}>
                    喜欢:
                    {this.props.posts[id-1].likes}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({data: state.comments, posts: state.posts}); //一般不这样用,都会过滤一下数据在拿进来

export default connect(mapStateToProps)(PostBody); //固定格式,导出 CommentBox,使用connect,调用mapStateToProps
