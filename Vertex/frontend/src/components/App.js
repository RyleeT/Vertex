import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header/index";
import Sidebar from "./layout/Sidebar/index";
import Alerts from "./layout/Alerts";
import { Wrapper } from "./Styles";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute/index";
import Dashboard from "./leads/Dashboard";
import Board from "./kanban/Board";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Wrapper className="d-flex flex-column">
                <Header />
                <div className="row flex-grow-1 m-0">
                  <Sidebar />
                  <div className="col pl-3 pr-3 pt-3">
                    <Switch>
                      <PrivateRoute exact path="/" component={Board} />
                      <PrivateRoute exact path="/leads" component={Dashboard} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                    </Switch>
                  </div>
                </div>
                <Alerts />
              </Wrapper>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
