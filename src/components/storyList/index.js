import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../~library/Button";
import { storiesApiDeleteStory } from "../../state/stories/actions";
import { getStoryById } from "../../state/stories/selectors";

class Stories extends Component {
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
    stories: state.storyList.ids.map(id => getStoryById(id, state))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDelete: id => dispatch(storiesApiDeleteStory(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
