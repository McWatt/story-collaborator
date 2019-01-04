import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../~library/Button";
import { authLoginRequest } from "../../state/authentication/actions";
import { testEmailConstraints } from "../../utils/test-email-constraints";
import { testPasswordConstraints } from "../../utils/test-password-constraints";
import { userGet } from "../../state/user/selectors";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    const isPasswordValid = testPasswordConstraints(password).isLongEnough;
    const isEmailValid = testEmailConstraints(email);
    const isValid = isPasswordValid && isEmailValid;

    return (
      <div>
        <header>
          <h1>Login</h1>
        </header>
        <form>
          <label>
            Email: {isEmailValid ? "v" : "x"}
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="email"
            />
          </label>
          <br />
          <label>
            Password: {isPasswordValid ? "v" : "x"}
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="current-password"
            />
          </label>
          <Button
            type="button"
            disabled={!isValid}
            onClick={() =>
              this.props.handleSubmit(
                this.state.email,
                this.state.password,
                this.props.history
              )
            }
          >
            Login
          </Button>
          <div>
            No login? <Link to="/register">Create an account!</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: userGet(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (email, password, history) =>
      dispatch(authLoginRequest(email, password, history))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
