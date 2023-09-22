import React, { useState, useEffect } from "react";
import { connect, Provider } from "react-redux";
import { init } from "@rematch/core";
import { Form, FormControl } from "react-bootstrap";

// Create a Rematch model for typing speed tool
const typingSpeed = {
  state: {
    textToType: "The quick brown fox jumps over the lazy dog.",
    userTypedText: "",
    wordsPerMinute: 0,
    testStarted: false,
  },


  reducers: {
    updateTypedText: (state, typedText) => ({
      ...state,
      userTypedText: typedText,
    }),

    calculateWordsPerMinute: (state) => {
      const typedWords = state.userTypedText.trim().split(/\s+/).length;
      const timeInSeconds = state.userTypedText.length / 5 / 60; // Assuming 5 characters per word
      const wordsPerMinute = (typedWords / timeInSeconds) * 60;
      return {
        ...state,
        wordsPerMinute: Math.round(wordsPerMinute),
      };
    },
  },
};

// Initialize the Redux store using Rematch
const store = init({
  models: { typingSpeed },
});

function TypingSpeedTool(props) {
  const {
    textToType,
    userTypedText,
    wordsPerMinute,
    updateTypedText,
    calculateWordsPerMinute,
  } = props;

  useEffect(() => {
    calculateWordsPerMinute();
  }, [userTypedText, calculateWordsPerMinute]);

  return (
    <div>
      <p>Type the following text: {textToType}</p>
      <Form>
        <Form.Group controlId="typedText">
          <Form.Label>Your Typed Text</Form.Label>
          <FormControl
            as="textarea"
            rows={3}
            value={userTypedText}
            onChange={(e) => updateTypedText(e.target.value)}
          />
        </Form.Group>
      </Form>
      <p className="my-2">Words Per Minute: {wordsPerMinute}</p>
    </div>
  );
}

// Connect the component to the Redux store using Rematch
const mapStateToProps = (state) => ({
  textToType: state.typingSpeed.textToType,
  userTypedText: state.typingSpeed.userTypedText,
  wordsPerMinute: state.typingSpeed.wordsPerMinute,
});

const mapDispatchToProps = (dispatch) => ({
  updateTypedText: (typedText) =>
    dispatch.typingSpeed.updateTypedText(typedText),
  calculateWordsPerMinute: () => dispatch.typingSpeed.calculateWordsPerMinute(),
});

const ConnectedTypingSpeedTool = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypingSpeedTool);

function Day10() {
  return (
    <Provider store={store}>
      <ConnectedTypingSpeedTool />
    </Provider>
  );
}

export default Day10;
