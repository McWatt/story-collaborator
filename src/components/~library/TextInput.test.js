import React from "react";
import TextInput from "./TextInput";
import renderer from "react-test-renderer";

describe("<TextInput />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TextInput name="title" type="text" value="value" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
