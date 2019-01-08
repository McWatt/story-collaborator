import React, { Component } from "react";
import Button from "../~library/Button";
import Textarea from "../~library/Textarea";
import TextInput from "../~library/TextInput";
import { connect } from "react-redux";
import { storiesApiCreateStory } from "../../state/stories/actions";
import { userGetId } from "../../state/user/selectors";

export class AddStory extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  render() {
    const { title, description } = this.state;
    const isValid = title.length > 0 && description.length > 0;

    return (
      <form
        id="js-story-add-form"
        onSubmit={event => {
          event.preventDefault();
          this.props.handleSubmit(this.state.title, this.state.description);
        }}
      >
        <label htmlFor="title">Title:</label>
        <TextInput
          id="title"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <Textarea
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Button type="submit" primary={!!isValid} disabled={!isValid}>
          Add
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    id: userGetId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (title, description) => {
      dispatch(
        storiesApiCreateStory({
          title,
          description
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStory);
