import React, { Component } from "react";
import { connect } from "react-redux";
import StyledLink from "../~library/StyledLink";
import Button from "../~library/Button";
import { authLogoutRequest } from "../../state/authentication/actions";

class User extends Component {
  render() {
    return (
      <div className="User">
        <header>
          {this.props.user.userId ? (
            <>
              <StyledLink to="/profile">{this.props.user.name}</StyledLink>
              <Button small onClick={this.props.handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <StyledLink to="/login">Login</StyledLink>
          )}
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return { handleLogout: () => dispatch(authLogoutRequest()) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
