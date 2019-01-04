import React, { Component } from "react";
import { connect } from "react-redux";
import { appMessageClear } from "../../state/appMessages/actions";
import { appMessagesGetMessage } from "../../state/appMessages/selectors";

class AppMessages extends Component {
  render() {
    const showMessage = !!this.props.message;
    const message = showMessage ? (
      <div>
        {this.props.message}{" "}
        <button onClick={this.props.clearMessage}>x</button>
      </div>
    ) : null;

    return <>{message}</>;
  }
}

const mapStateToProps = state => {
  return { message: appMessagesGetMessage(state) };
};

const mapDispatchToProps = dispatch => {
  return { clearMessage: () => dispatch(appMessageClear()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMessages);
