// @flow

import React, { Component } from "react";
import Button from "../~library/Button";
import Textarea from "../~library/Textarea";
import TextInput from "../~library/TextInput";
import { connect } from "react-redux";
import { storiesApiCreateStory } from "../../state/stories/actions";

type Props = {
  dispatch: Function
};

type State = {
  title: string,
  description: string
};

class AddStory extends Component<Props, State> {
  state = {
    title: "",
    description: ""
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.dispatch(
      storiesApiCreateStory({
        title: this.state.title,
        description: this.state.description
      })
    );
  };

  render() {
    const { title, description } = this.state;
    const isValid = title.length > 0 && description.length > 0;

    return (
      <form id="js-story-add-form">
        <label>
          Title:
          <TextInput
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <Textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <Button
          type="submit"
          disabled={!isValid}
          primary={!!isValid}
          onClick={this.handleSubmit}
        >
          Add
        </Button>
      </form>
    );
  }
}

const mapPropsToState = (state, props) => {
  return {
    id: state.user.id
  };
};

export default connect(mapPropsToState)(AddStory);
