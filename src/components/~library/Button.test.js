import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <div>
        <Button type="button">A regular button</Button>
        <Button type="button" disabled="true">
          A disabled button
        </Button>
        <Button type="button" primary="true">
          A primary button
        </Button>
        <Button type="button" danger="true">
          A danger button
        </Button>
        <Button type="button" large>
          A large button
        </Button>
        <Button type="button" danger large>
          A large, dangerous button
        </Button>
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
