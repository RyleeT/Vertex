import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import { Navbar, Navbutton } from "./Styles";
import { toggleSidebar } from "../../../actions/sidebar";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    // Display when logged in
    const authLinks = (
      <ul className="navbar-nav flex-fill w-100 justify-content-end">
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
      <ul className="navbar-nav flex-fill w-100 justify-content-end">
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

    // Sidebar toggle
    const sidebarToggle = (
      <ul className="navbar-nav flex-fill w-100">
        <Navbutton onClick={this.props.toggleSidebar} size="30"></Navbutton>
      </ul>
    );

    return (
      <Navbar>
        <nav className="navbar navbar-expand">
          {sidebarToggle}
          <a
            className="navbar-brand flex-fill justify-content-center text-white"
            href="#"
          >
            <img
              src="/static/VertexLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Vertex
          </a>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, toggleSidebar })(Header);
