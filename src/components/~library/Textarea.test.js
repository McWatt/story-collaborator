import React from "react";
import Textarea from "./Textarea";
import renderer from "react-test-renderer";

describe("<Textarea />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Textarea value="the value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
