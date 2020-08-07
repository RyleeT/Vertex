import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import { Navbar, Navbutton, StyledLink, Title, Welcome } from "./Styles";
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
          <Welcome>{user ? `Welcome ${user.username}` : ""}</Welcome>
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
          <StyledLink to="/register" className="nav-link">
            Register
          </StyledLink>
        </li>
        <li className="nav-item">
          <StyledLink to="/login" className="nav-link">
            Login
          </StyledLink>
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
          <StyledLink
            className="navbar-brand flex-fill justify-content-center"
            to="/"
          >
            <img
              src="/static/VertexLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <Title>Vertex</Title>
          </StyledLink>
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
