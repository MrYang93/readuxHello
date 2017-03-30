import { createStore } from 'redux';
import rootReducer from './reducers';


let comments = {
  1: ['nice course', 'help me a lot'],
  2: ['really good', 'save me lots of time']
}

// let num = {
//   1:0,
//   2:0
// }

const posts = [
  {
    id: 1,
    title: 'redux-hello',
    likes: 3
  },
  {
    id: 2,
    title: 'redux-baby',
    likes: 6
  }
]

const defaultState = {
  posts,
  comments
}
const store = createStore(rootReducer,defaultState);

export default store;


// import { createStore } from 'redux'
//
//
// let comments = [
//   'hello1',
//   'hello2',
//   'hello3'
// ]
//
//
// function commentReducer(state = [],action){
//   switch(action.type){
//     case 'ADD_COMMENT' :
//     return [...state, action.comment]
//     default:
//     return state;
//   }
// }
//
// const store = createStore(commentReducer,comments);
//
// export default store
