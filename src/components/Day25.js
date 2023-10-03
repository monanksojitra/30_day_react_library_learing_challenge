import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  MarkSeriesCanvas,
  Hint,
} from "react-vis";

const getRandomData = () => {
  return new Array(100).fill(0).map((row) => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.5,
  }));
};

const colorRanges = {
  typeA: ["#59E4EC", "#0D676C"],
  typeB: ["#EFC1E3", "#B52F93"],
};

const randomData = getRandomData();

const drawModes = ["canvas", "svg"];
function ShowcaseButton(props) {
  const { buttonContent, onClick } = props;
  return (
    <button className="showcase-button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}

ShowcaseButton.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Day25 = () => {
  const [drawMode, setDrawMode] = useState(0);
  const [data, setData] = useState(randomData);
  const [colorType, setColorType] = useState("typeA");
  const [value, setValue] = useState(null);

  const handleRandomDataClick = () => {
    setData(getRandomData());
  };

  const markSeriesProps = {
    animation: true,
    className: "mark-series-example",
    sizeRange: [5, 15],
    seriesId: "my-example-scatterplot",
    colorRange: colorRanges[colorType],
    opacityType: "literal",
    data,
    onNearestXY: (newValue) => setValue(newValue),
  };

  const mode = drawModes[drawMode];

  return (
    <div className="canvas-wrapper">
      <div className="canvas-example-controls">
        <button
          className="btn btn-primary my-2"
          onClick={handleRandomDataClick}
        >
          UPDATE DATA
        </button>
      </div>
      <XYPlot onMouseLeave={() => setValue(null)} width={700} height={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        {mode === "canvas" ? (
          <MarkSeries {...markSeriesProps} />
        ) : (
          <MarkSeriesCanvas {...markSeriesProps} />
        )}
        {value ? <Hint value={value} /> : null}
      </XYPlot>
    </div>
  );
};

export default Day25;
