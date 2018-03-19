import React, { Component } from 'react';
import { connect } from 'react-redux';


class Story extends Component {
    render() {

        return (
            <div className="Story">
                <header className="App-header">
                    Name: {this.props.user.name}
                </header>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.stories[1] // temp
    };
}

export default connect(mapStateToProps)(Story);