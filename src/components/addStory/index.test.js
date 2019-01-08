import React from "react";
import { AddStory } from "./index";
import {
  render,
  fireEvent,
  cleanup,
  getByLabelText,
  getByText
} from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

const setup = () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText, container } = render(
    <AddStory handleSubmit={handleSubmit} />
  );
  const title = getByLabelText(/title/i);
  const description = getByLabelText(/description/i);
  const button = getByText(/add/i);
  return { container, title, description, button, handleSubmit };
};

describe("<AddStory />", () => {
  it("renders correctly", () => {
    const { container } = render(<AddStory />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("submit handler does not fire when inputs are invalid", () => {
    const addStory = setup();
    fireEvent.click(addStory.button);
    expect(addStory.handleSubmit).toHaveBeenCalledTimes(0); // button is disabled
  });

  it("submit handler does not fire when title is invalid", () => {
    const addStory = setup();

    fireEvent.change(addStory.description, {
      target: { value: "asdflkasjdflkjsfdlksgjf" }
    });

    fireEvent.click(addStory.button);
    expect(addStory.handleSubmit).toHaveBeenCalledTimes(0); // button is disabled
  });

  it("submit handler fires when inputs are valid", () => {
    const addStory = setup();

    fireEvent.change(addStory.title, {
      target: { value: "sdalksjflksgajflajfl" }
    });

    fireEvent.change(addStory.description, {
      target: { value: "asdflkasjdflkjsfdlksgjf" }
    });

    fireEvent.click(addStory.button);
    expect(addStory.handleSubmit).toHaveBeenCalledTimes(1); // button is not disabled
  });

  it("submit handler returns input values", () => {
    const addStory = setup();

    fireEvent.change(addStory.title, {
      target: { value: "sdalksjflksgajflajfl" }
    });

    fireEvent.change(addStory.description, {
      target: { value: "asdflkasjdflkjsfdlksgjf" }
    });

    fireEvent.click(addStory.button);

    expect(addStory.handleSubmit.mock.calls[0][0]).toBe("sdalksjflksgajflajfl");
    expect(addStory.handleSubmit.mock.calls[0][1]).toBe(
      "asdflkasjdflkjsfdlksgjf"
    );
  });
});
