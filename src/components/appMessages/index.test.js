import React from "react";
import { AppMessages } from "./index";
import {
  render,
  fireEvent,
  cleanup,
  getByText,
  queryByText
} from "react-testing-library";

afterEach(cleanup);

const setup = () => {
  const clearMessage = jest.fn();
  const { getByText, container } = render(
    <AppMessages clearMessage={clearMessage} message="test message" />
  );
  const closeButton = getByText(/x/i);
  return { container, closeButton, clearMessage };
};

describe("<AppMessages />", () => {
  it("renders correctly", () => {
    const { container } = render(<AppMessages message="test message yeah!" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("shows message", () => {
    const message = "test message yeah!";
    const { getByText, container } = render(<AppMessages message={message} />);

    getByText(message);
  });

  it("renders nothing", () => {
    const { container } = render(<AppMessages />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("clear message button fires", () => {
    const appMessages = setup();
    fireEvent.click(appMessages.closeButton);
    expect(appMessages.clearMessage).toHaveBeenCalledTimes(1);
  });
});
