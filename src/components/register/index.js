import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../~library/Button";
import { authRegistrationRequest } from "../../state/authentication/actions";
import { testPasswordConstraints } from "../../utils/test-password-constraints";
import { testEmailConstraints } from "../../utils/test-email-constraints";

class Register extends Component {
  state = {
    email: "",
    password: "",
    fullName: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount = () => {
    if (this.props.location.pathname !== "/register") {
      this.props.history.push("/register");
    }
  };

  render() {
    const { email, password } = this.state;
    const passwordConstraintTestResults = testPasswordConstraints(password);
    const isEmailValid = testEmailConstraints(email);
    const isValid = passwordConstraintTestResults.isValid && isEmailValid;

    return (
      <div>
        <header>
          <h1>Register</h1>
        </header>
        <form>
          <label>
            Full Name:
            <input
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </label>
          <br />
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
            Password: {passwordConstraintTestResults.isValid ? "v" : "x"}
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="new-password"
            />
            {passwordConstraintTestResults.isValid ? null : (
              <div>
                Requirements:
                <ul>
                  {!passwordConstraintTestResults.isLongEnough ? (
                    <li>Eight characters minimum</li>
                  ) : null}
                  {!passwordConstraintTestResults.hasUpperCaseLetter ? (
                    <li>At least one uppercase letter</li>
                  ) : null}
                  {!passwordConstraintTestResults.hasLowerCaseLetter ? (
                    <li>At least one lowercase letter</li>
                  ) : null}
                  {!passwordConstraintTestResults.hasNumber ? (
                    <li>at least one number</li>
                  ) : null}
                  {!passwordConstraintTestResults.hasSpecialCharacter ? (
                    <li>at least one special character</li>
                  ) : null}
                </ul>
              </div>
            )}
          </label>
          <Button
            type="button"
            disabled={!isValid}
            onClick={() =>
              this.props.handleSubmit(
                this.state.email,
                this.state.password,
                this.state.fullName,
                this.props.history
              )
            }
          >
            Register
          </Button>
          <div>
            Have an account? <Link to="/login">Login!</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (email, password, fullName, history) =>
      dispatch(authRegistrationRequest(email, password, fullName, history))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
