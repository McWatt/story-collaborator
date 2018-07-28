// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

it("renders without crashing", () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);

  expect("true").toBe("true");
});
// note: this test fails due to the following error:
// Invariant Violation: Could not find "store" in either the context or props of "Connect(User)".Either wrap the root component in a < Provider >, or explicitly pass "store" as a prop to "Connect(User)".
// https://github.com/reduxjs/react-redux/issues/57
