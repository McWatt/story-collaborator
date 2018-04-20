import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// action creators
export const updateToLoggedInStatus = (propertiesObj) => {
    return {
        type: 'user/UPDATE_TO_LOGGED_IN_STATUS',
        propertiesObj
    }
}

// reducer
export const user = (state = 'guest', action) => {
    switch (action.type) {
        case 'user/UPDATE_TO_LOGGED_IN_STATUS':
            return Object.assign({}, state, action.propertiesObj);
        default:
            return state
    }
}

class User extends Component {
    render() {
        return (
            <div className="User">
                <header>
                    { this.props.user.id ? <Link to='/profile'>{this.props.user.name}</Link> : this.props.user.name }
                </header>
                {!this.props.user.id ? <div><Link to='/login'>Login</Link></div> : null}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(User);