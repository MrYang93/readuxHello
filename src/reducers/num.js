function postComments(state, action) {
  switch(action.type){
    case 'ADD_NUM':
    return action.comment+1;
    default:
    return state;
  }
}

function numReducer(state, action) {
  if(typeof action.postId !== 'undefined') {
    console.log(state)
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default numReducer;
