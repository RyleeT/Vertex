import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth";
import { createMessage } from "../../../actions/messages";
import StyledParticles from "../../common/Particles";
import { PageWrapper, RegisterWrapper, Card, Button, Label } from "./Styles";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/board" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <PageWrapper>
        <StyledParticles />
        <RegisterWrapper>
          <Card className="card card-body">
            <h2 className="text-center">Register</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <Label>Username</Label>
                <input
                  type="text"
                  className="form-control rounded"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div className="form-group">
                <Label>Email</Label>
                <input
                  type="email"
                  className="form-control rounded"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <Label>Password</Label>
                <input
                  type="password"
                  className="form-control rounded"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <Label>Confirm Password</Label>
                <input
                  type="password"
                  className="form-control rounded"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}
                />
              </div>
              <div className="form-group rounded">
                <Button type="submit" className="btn">
                  Register
                </Button>
              </div>
            </form>
          </Card>
          <div className="card card-body rounded mt-4">
            <p className="text-center mb-0">
              Already have an account? <Link to="/login">Login.</Link>
            </p>
          </div>
        </RegisterWrapper>
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
