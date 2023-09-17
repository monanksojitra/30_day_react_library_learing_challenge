import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";

function Day5({ children }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  );
}
test("renders the component with a checkbox", () => {
  render(<Day5 />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeInTheDocument();
});

test("initially hides the children", () => {
  render(<Day5>Test Message</Day5>);
  const message = screen.queryByText("Test Message");
  expect(message).not.toBeInTheDocument();
});

test("shows the children when the checkbox is checked", () => {
  render(<Day5>Test Message</Day5>);
  const checkbox = screen.getByRole("checkbox");

  // Initially, the message should not be visible.
  expect(screen.queryByText("Test Message")).not.toBeInTheDocument();

  // Click the checkbox to show the message.
  fireEvent.click(checkbox);

  // After clicking, the message should be visible.
  expect(screen.getByText("Test Message")).toBeInTheDocument();
});
