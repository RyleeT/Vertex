import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Alerts from "./layout/Alerts";
import { Wrapper } from "./Styles";
import Home from "./common/Home";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import Dashboard from "./leads/Dashboard";
import Board from "./kanban/Board";
import TaskDetails from "./kanban/TaskDetails";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "bottom center",
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
              <Wrapper>
                <Header />
                <div className="row flex-grow-1 m-0">
                  <Sidebar />
                  <div className="col pl-0 pr-0">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                      <PrivateRoute path="/board" component={Board} />
                      <PrivateRoute exact path="/leads" component={Dashboard} />
                    </Switch>
                  </div>
                </div>
                <Alerts />
              </Wrapper>
              <PrivateRoute
                exact
                path="/board/task/:taskId"
                component={TaskDetails}
              />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
