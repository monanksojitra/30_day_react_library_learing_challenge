import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const Example = () => {
  const [data, setData] = useState(generateRandomData());
  const [interval, setInterval] = useState("preserveEnd");

  function generateRandomData() {
    const randomData = [];
    for (let i = 0; i < 7; i++) {
      randomData.push({
        name: `Page ${String.fromCharCode(65 + i)}`,
        uv: Math.floor(Math.random() * 5000),
        pv: Math.floor(Math.random() * 10000),
        amt: Math.floor(Math.random() * 5000),
      });
    }
    return randomData;
  }

  const chart = (interval) => (
    <ResponsiveContainer height={250} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={interval} />
        <YAxis interval={interval} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

  const handleGenerateRandomData = () => {
    setData(generateRandomData());
  };

  return (
    <>
      <button
        className="btn btn-primary my-2"
        onClick={handleGenerateRandomData}
      >
        Generate Random Data
      </button>
      {chart(interval)}
    </>
  );
};

export default Example;
