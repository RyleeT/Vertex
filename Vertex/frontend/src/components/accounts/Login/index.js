import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";
import StyledParticles from "../../common/Particles";
import {
  PageWrapper,
  FormWrapper,
  Card,
  Button,
  Label,
} from "../../common/Styles";
export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/board" />;
    }

    const { username, password } = this.state;

    return (
      <PageWrapper>
        <StyledParticles />
        <FormWrapper>
          <Card className="card card-body">
            <h2 className="text-center">Login</h2>
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
                <Button type="submit" className="btn">
                  Login
                </Button>
              </div>
            </form>
          </Card>
          <div className="card card-body rounded mt-4">
            <p className="text-center mb-0">
              New to Vertex? <Link to="/register">Create an account.</Link>
            </p>
          </div>
        </FormWrapper>
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
