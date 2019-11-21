import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route path="/art_posts" component={ArtPosts} />
      //       <Route path="/create_post" component={CreatePost} />
      //     </Switch>
      //   </div>
      // </Router>
      <h1>Hello World!</h1>
    );
  }
}
