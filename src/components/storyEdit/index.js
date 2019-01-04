// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../~library/Button";
import TextInput from "../~library/TextInput";
import Textarea from "../~library/Textarea";
import {
  storiesApiUpdateStory,
  storiesApiGetStory
} from "../../state/stories/actions";
import { withRouter } from "react-router-dom";
import { storyGetById } from "../../state/stories/selectors";

type Props = {
  story: {
    title: string,
    content: Array<mixed>,
    description: string,
    id: string
  },
  dispatch: Function,
  id: string,
  history: Function
};

type State = {
  content: Array<mixed>,
  title: string,
  description: string,
  activeParagraph: number,
  dataFetched: boolean
};

class Story extends Component<Props, State> {
  titleInput: {
    current: null | HTMLInputElement
  };
  dom: {};
  shouldFocusParagraph: boolean;
  addPropsToState: Function;
  checkDataFetched: Function;

  constructor(props) {
    super(props);

    this.state = {
      content: [],
      title: "",
      description: "",
      activeParagraph: 0,
      dataFetched: false
    };

    this.titleInput = React.createRef();

    this.dom = {};

    this.shouldFocusParagraph = false;
  }

  handleContentChange = (event: SyntheticEvent<HTMLInputElement>) => {
    let contentCopy = [...this.state.content];

    contentCopy[event.target.dataset.key] = event.target.value;
    this.setState({ content: contentCopy });
  };

  handleParagraphDelete = (event: SyntheticEvent<HTMLButtonElement>) => {
    let content = [...this.state.content];
    const paragraphIndex = Number(event.target.dataset.key);
    content.splice(paragraphIndex, 1);

    this.setState({ content });
  };

  handleParagraphKeyUp = (event: SyntheticKeyboardEvent<*>) => {
    const key = Number(event.currentTarget.dataset.key);

    if (event.keyCode === 13) {
      event.preventDefault();
      this.handleParagraphAdd(event);
      this.setState({
        activeParagraph: key + 1
      });
      this.shouldFocusParagraph = true;
    } else if (event.keyCode === 8 && event.target.value.length === 0) {
      this.handleParagraphDelete(event);
      this.setState({
        activeParagraph: key - 1
      });
      this.shouldFocusParagraph = true;
    } else {
      return false;
    }
  };

  handleParagraphAdd = (event: SyntheticEvent<HTMLButtonElement>) => {
    let contentCopy = [...this.state.content];
    let key = Number(event.currentTarget.dataset.key);
    let index =
      typeof key === "number" && !isNaN(key)
        ? key + 1
        : this.state.content.length;

    contentCopy.splice(index, 0, "");

    this.setState(() => ({ content: contentCopy }));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.handleSubmit({
      title: this.state.title,
      content: this.state.content,
      id: this.props.story.id,
      description: this.state.description
    });
  };

  handleCancel = () => {
    this.props.history.push("/stories");
  };

  addPropsToState = () => {
    const { title, content, description } = this.props.story;

    this.setState({
      content: content,
      title: title,
      description: description,
      activeParagraph: 0
    });
  };

  checkDataFetched = () => {
    if (!this.state.dataFetched && this.props.story) {
      this.setState({ dataFetched: true });
    }
  };

  componentDidMount() {
    this.checkDataFetched();
    if (!this.props.story) {
      this.props.getStory(this.props.storyId);
    }
  }

  componentDidUpdate() {
    this.checkDataFetched();

    if (this.shouldFocusParagraph) {
      this.dom[`paragraphy-${this.state.activeParagraph}`].focus();
      this.shouldFocusParagraph = false;
    }
  }

  render() {
    if (!this.state.dataFetched) {
      return <div>Loading....</div>;
    }

    const paragraphs = this.state.content.map((item, idx) => {
      return (
        <div key={idx}>
          <Textarea
            data-key={idx}
            onChange={this.handleContentChange}
            onKeyDown={this.handleParagraphKeyUp}
            value={item}
            ref={input => {
              this.dom[`paragraphy-${idx}`] = input;
            }}
          />
          <Button
            type="button"
            onClick={this.handleParagraphDelete}
            data-key={idx}
          >
            X
          </Button>
        </div>
      );
    });

    return (
      <div>
        <header>
          <h1>Edit: {this.props.story.title}</h1>
          <TextInput
            type="text"
            name="title"
            defaultValue={this.props.story.title}
            onChange={this.handleChange}
            ref={this.titleInput}
          />
        </header>
        <Textarea
          name="description"
          onChange={this.handleChange}
          defaultValue={this.props.story.description}
        />
        <h2>The story</h2>
        {paragraphs}
        <Button type="button" onClick={this.handleSubmit}>
          Save
        </Button>
        <Button type="button" onClick={this.handleCancel}>
          Cancel
        </Button>
        <Button type="button" onClick={this.handleParagraphAdd}>
          +
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const storyId = props.match.params.id;

  return { story: storyGetById(storyId, state), storyId };
}

function mapDispatchToProps(dispatch) {
  return {
    getStory: storyId => dispatch(storiesApiGetStory(storyId)),
    handleSubmit: payload => dispatch(storiesApiUpdateStory(payload))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Story)
);
