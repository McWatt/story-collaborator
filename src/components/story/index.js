// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

type Props = {
  story: {
    content: [],
    title: string,
    description: string
  }
};

class Story extends Component<Props> {
  render() {
    const content = this.props.story.content.map((item, idx) => {
      return <p key={idx}>{item}</p>;
    });
    return (
      <div>
        <header>
          <h1>{this.props.story.title}</h1>
          <div>{this.props.story.description}</div>
          {content}
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
