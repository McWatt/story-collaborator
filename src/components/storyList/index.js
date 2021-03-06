import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../~library/Button";
import {
  storiesApiDeleteStory,
  storiesApiGetStoryList
} from "../../state/stories/actions";
import { storyGetByIds } from "../../state/stories/selectors";
import { userGetId } from "../../state/user/selectors";
import { storyListGetIds } from "../../state/storyList/selectors";

class Stories extends Component {
  componentDidMount() {
    this.props.getStoriesList(this.props.userId);
  }

  render() {
    const storyList = Object.values(this.props.stories).map((item, idx) => {
      return (
        <li key={idx}>
          <h2>{item.title}</h2>
          <div>{item.description}</div>
          <Link to={`/stories/${item.id}`}>View</Link> |{" "}
          <Link to={`/stories/${item.id}/edit`}>Edit</Link> |
          <Button
            type="button"
            onClick={() => this.props.handleDelete(item.id)}
          >
            Delete
          </Button>
        </li>
      );
    });

    return (
      <div className="StoryList">
        <header className="StoryList-header">List of stories</header>
        <ul>{storyList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stories: storyGetByIds(storyListGetIds(state), state),
    userId: userGetId(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDelete: id => dispatch(storiesApiDeleteStory(id)),
    getStoriesList: userId => dispatch(storiesApiGetStoryList(userId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
