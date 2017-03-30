import React from 'react';
import App from './App.js';
import Home from './Home.js';
import Post from './Post.js';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';


class Routers extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render(){

    return(
      <Router  history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/posts/:postId" component={Post} />
        </Route>
      </Router>
    )
  }
}
export default Routers;
