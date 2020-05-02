import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./redux/store";

import Init from "./pages/Init";
import Game from "./pages/Game";

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <React.StrictMode>
      <Route exact path="/" component={Init} />
      <Route exact path="/game" component={Game} />
    </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);
console.log('store', store.getState());
serviceWorker.unregister();
