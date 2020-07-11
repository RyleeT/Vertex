import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import { Navbar } from "./Styles";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    // Display when logged in
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <span className="navbar-text text-white mr-3">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-white rounded"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    // Display when not logged in
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link text-white">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-white">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <Navbar>
        <nav className="navbar navbar-expand-sm border-bottom">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-white" href="#">
              <img
                src="/static/VertexLogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              Vertex
            </a>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
