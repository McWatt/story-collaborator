import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Stories extends Component {

    render() {

        const storyList = Object.values(this.props.stories).map((item, idx) => {
            return (
                <li key={idx}>
                    <h2>{item.title}</h2>
                    <div>{item.content}</div>
                    <Link to={`/stories/${item.id}`}>View</Link> | <Link to={`/stories/${item.id}/edit`}>Edit</Link>
                </li>
            )
        });

        return (
            <div className="StoryList">
                <header className="StoryList-header">
                    List of stories
                </header>
                <ul>
                    {storyList}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        stories: state.stories
    };
}

export default connect(mapStateToProps)(Stories);