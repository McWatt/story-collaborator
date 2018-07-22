import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../~library/Button';
import { apiDeleteStory } from '../../api';



export const ADD_STORY = 'StoryList/ADD_STORY';
export const REMOVE_STORY = 'StoryList/REMOVE_STORY';

export const addStory = id => {
    return {
        type: ADD_STORY,
        payload: id
    }
};
export const removeStory = id => {
    return {
        type: REMOVE_STORY,
        payload: id
    }
};

// storyList reducer
export const storyListReducer = (state = { ids: [] }, action) => {
    switch (action.type) {
        case ADD_STORY:
            return Object.assign({}, state, {
                ids: state.ids.concat(action.payload)
            });
        case REMOVE_STORY:
            return Object.assign({}, state, {
                ids: state.ids.filter(id => action.payload !== id)
            });
        default:
            return state;
    }
}

class Stories extends Component {

    handleDelete = id => event => {
        this.props.dispatch(apiDeleteStory(id));
    }

    render() {
        
        const storyList = Object.values(this.props.stories).map((item, idx) => {
		return (
		    <li key={idx}>
		        <h2>{item.title}</h2>
		        <div>{item.description}</div>
		        <Link to={`/stories/${item.id}`}>View</Link> | <Link to={`/stories/${item.id}/edit`}>Edit</Link> | 
		        <Button type="button" onClick={this.handleDelete(item.id)}>Delete</Button>
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

function mapStateToProps(state) {
    return {
        stories: state.storyList.ids.map(id => state.stories[id])
    };
}

export default connect(mapStateToProps)(Stories);
