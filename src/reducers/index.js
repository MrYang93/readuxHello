import { combineReducers } from 'redux';

import postReducer from './posts.js';
import commentReducer from './comments.js';
// import numReducer from './num.js';



const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
});

export default rootReducer;
