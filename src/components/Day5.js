import React, { useState } from "react";
import "@testing-library/jest-dom";
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

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message";
  render(<Day5>{testMessage}</Day5>);

  // Initially, the message should not be visible.
  expect(screen.queryByText(testMessage)).toBeNull();

  // Click the checkbox to show the message.
  fireEvent.click(screen.getByLabelText(/show/i));

  // After clicking, the message should be visible.
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
