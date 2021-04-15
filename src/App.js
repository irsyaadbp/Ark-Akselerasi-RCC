import { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pagination from "./pages/Pagination";
import ReactPractice from "./pages/ReactPractice";
import "antd/dist/antd.css";
class App extends Component {
  render() {
    console.log("[LIFECYCLE] => render");
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ReactPractice} />
          <Route path="/pagination" exact component={Pagination} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
