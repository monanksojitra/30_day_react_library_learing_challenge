import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryScatter } from "victory";
import { range, random } from "lodash";

const Day24 = () => {
  const [scatterData, setScatterData] = useState(getScatterData());


  useEffect(() => {
    const setStateInterval = setInterval(() => {
      setScatterData(getScatterData());
    }, 3000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, []);

  function getScatterData() {
    const colors = [
      "violet",
      "cornflowerblue",
      "gold",
      "orange",
      "turquoise",
      "tomato",
      "greenyellow",
    ];
    const symbols = [
      "circle",
      "star",
      "square",
      "triangleUp",
      "triangleDown",
      "diamond",
      "plus",
    ];
    return range(25).map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: random(10, 50),
        y: random(2, 100),
        size: random(4) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[random(0, 6)],
        opacity: 0.6,
      };
    });
  }

  return (
    <VictoryChart animate={{ duration: 1700, easing: "bounce" }}>
      <VictoryScatter
        data={scatterData}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
            opacity: ({ datum }) => datum.opacity,
          },
        }}
      />
    </VictoryChart>
  );
};

export default Day24;
