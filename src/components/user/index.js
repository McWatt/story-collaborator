import React, { Component } from 'react';
import { connect } from 'react-redux';


class User extends Component {
    render() {
        
        return (
            <div className="User">
                <header className="App-header">
                    Name: {this.props.user.name}
                </header>
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