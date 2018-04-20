import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Edit: {this.props.story.title}</h1>
                    <p>{this.props.story.content}</p>
                </header>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        story: state.stories[props.match.params.id]
    };
}

export default connect(mapStateToProps)(Story);