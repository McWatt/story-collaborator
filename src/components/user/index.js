import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authLogoutRequest } from "../../state/authentication/actions";

class User extends Component {
  render() {
    return (
      <div className="User">
        <header>
          {this.props.user.userId ? (
            <>
              <Link to="/profile">{this.props.user.name}</Link>
              <button onClick={this.props.handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
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
