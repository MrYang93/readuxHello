function postPosts(state = {}, action) {
  switch(action.type){
    case 'ADD_POSTS':
    return state.likes+1;
    default:
    return state;
  }
}

function postReducer(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    console.log('--------------',state)
    return [
      ...state.slice(0,action.postId-1),
      {...state[action.postId-1],likes: postPosts(state[action.postId-1], action)},
      ...state.slice(action.postId)
    ]
  }
  return state;
}

export default postReducer;
