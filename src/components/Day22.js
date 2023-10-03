import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const Day22 = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);


  useEffect(() => {
    const chartWidth = 500;
    const chartHeight = 300;

    const color = d3
      .scaleOrdinal()
      .domain(chartData.map((d) => d[2]))
      .range(d3.schemeCategory10);

    const zoom = d3.zoom().on("zoom", zoomed);

    const svg = d3
      .select(chartRef.current)
      .attr("viewBox", [0, 0, chartWidth, chartHeight]);

    const g = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke-linecap", "round");

    g.selectAll("path")
      .data(chartData)
      .join("path")
      .attr("d", (d) => `M${d[0]},${d[1]}h0`)
      .attr("stroke", (d) => color(d[2]));

    const gx = svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`);
    const xAxis = (g, x) =>
      g
        .call(d3.axisTop(x).ticks(12))
        .call((g) => g.select(".domain").attr("display", "none"));

    const gy = svg.append("g");
    const yAxis = (g, y) =>
      g
        .call(d3.axisRight(y).ticks(12))
        .call((g) => g.select(".domain").attr("display", "none"));

    svg.call(zoom.transform, d3.zoomIdentity);

    function zoomed({ transform }) {
      g.attr("transform", transform).attr("stroke-width", 5 / transform.k);
      gx.call(
        xAxis,
        transform.rescaleX(d3.scaleLinear().domain([0, chartWidth]))
      );
      gy.call(
        yAxis,
        transform.rescaleY(d3.scaleLinear().domain([0, chartHeight]))
      );
    }

    return () => {
      svg.on(".zoom", null);
    };
  }, [chartData]);

  const generateRandomData = () => {
    const clusters = 3; // Number of clusters
    const pointsPerCluster = 10; // Number of points per cluster
    const clusterSpread = 50; // Spread of each cluster

    const newData = [];

    for (let i = 0; i < clusters; i++) {
      const clusterX = Math.random() * 500; // Random cluster center X position
      const clusterY = Math.random() * 300; // Random cluster center Y position

      for (let j = 0; j < pointsPerCluster; j++) {
        const x = clusterX + (Math.random() - 0.5) * clusterSpread;
        const y = clusterY + (Math.random() - 0.5) * clusterSpread;
        const color = d3.schemeCategory10[i % 10];
        newData.push([x, y, color]);
      }
    }

    setChartData(newData);
  };

  return (
    <div>
      <svg ref={chartRef} width={800} height={300}></svg>
      <button className="btn btn-primary" onClick={generateRandomData}>
        Generate Random Data
      </button>
    </div>
  );
};

export default Day22;
