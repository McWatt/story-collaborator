import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "../~library/Button";
import TextInput from "../~library/TextInput";
import Textarea from "../~library/Textarea";
import { apiUpdateStory } from "../../api";
import { withRouter } from "react-router-dom";

class Story extends Component {
  constructor(props) {
    super(props);

    const { title, content, description } = this.props.story;

    this.state = {
      content: content,
      title: title,
      description: description,
      activeParagraph: 0
    };

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleParagraphDelete = this.handleParagraphDelete.bind(this);
    this.handleParagraphAdd = this.handleParagraphAdd.bind(this);
    this.handleParagraphKeyUp = this.handleParagraphKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.titleInput = React.createRef();

    this.dom = {};

    this.shouldFocusParagraph = false;
  }

  handleContentChange(event) {
    let contentCopy = [...this.state.content];

    contentCopy[event.target.dataset.key] = event.target.value;
    this.setState({ content: contentCopy });
  }

  handleParagraphDelete(event) {
    let contentCopy = [...this.state.content];

    this.setState({
      content: contentCopy.filter(
        (item, index) => index !== Number(event.target.dataset.key)
      )
    });
  }

  handleParagraphKeyUp(event) {
    const key = Number(event.target.dataset.key);

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
  }

  handleParagraphAdd(event) {
    let contentCopy = [...this.state.content];
    let key = Number(event.target.dataset.key);
    let index =
      typeof key === "number" && !isNaN(key)
        ? key + 1
        : this.state.content.length;

    contentCopy.splice(index, 0, "");

    this.setState(() => ({ content: contentCopy }));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    this.props.dispatch(
      apiUpdateStory({
        title: this.state.title,
        content: this.state.content,
        id: this.props.story.id,
        description: this.state.description
      })
    );
  }

  handleCancel() {
    this.props.history.push("/stories");
  }

  componentDidMount() {
    this.titleInput.current.focus();
  }

  componentDidUpdate() {
    if (this.shouldFocusParagraph) {
      this.dom[`paragraphy-${this.state.activeParagraph}`].focus();
      this.shouldFocusParagraph = false;
    }
  }

  render() {
    const paragraphs = this.state.content.map((item, idx) => {
      return (
        <div key={idx}>
          <Textarea
            data-key={idx}
            onChange={this.handleContentChange}
            onKeyDown={this.handleParagraphKeyUp}
            value={item}
            innerRef={input => {
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
            innerRef={this.titleInput}
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

Story.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string
  })
};

function mapStateToProps(state, props) {
  return {
    story: state.stories[props.match.params.id]
  };
}

export default withRouter(connect(mapStateToProps)(Story));
