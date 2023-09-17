import React from "react";
import { useHookstate } from "@hookstate/core";

// Create Hookstate global state atom for image visibility

function Day7() {
  const imageVisibleState = useHookstate(true);
  const toggleImageVisibility = () => {
    imageVisibleState.set((pre) => !pre);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://i.morioh.com/210604/edc367c3.webp" // Replace with your static image URL
              className="card-img-top"
              style={{ display: imageVisibleState.get() ? "block" : "none" }}
              alt="Image"
            />
            <div className="card-body">
              <button
                className="btn btn-primary"
                onClick={toggleImageVisibility}
              >
                {imageVisibleState.get() ? "Hide" : "Show"} Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day7;
