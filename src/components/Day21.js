import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const Day21 = () => {
  const [chartData, setChartData] = useState({ labels: [], values: [] });
  const [startDate, setStartDate] = useState("2023-03-01"); // Default start date
  const [endDate, setEndDate] = useState("2023-03-10"); // Default end date

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const config = {
        type: "line",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Stock Price",
              data: chartData.values,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
            },
          },
        },
      };

      chartInstanceRef.current = new Chart(ctx, config);
    }
  }, [chartData]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/I:NDX/range/1/day/${startDate}/${endDate}?sort=asc&limit=120&apiKey=Sy3ctOkliifW0Hz37r3rf2MLR9HPRD10`
      );

      const responseData = response.data.results.map((result) => ({
        t: new Date(result.t).toISOString(),
        y: result.c,
      }));

      const labels = responseData.map((data) => formatISTDate(data.t));
      const values = responseData.map((data) => data.y);

      setChartData({ labels, values });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
  };

  const formatISTDate = (dateStr) => {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateStr).toLocaleString("en-IN", options);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="startDate" className="form-label">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            className="form-control"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="endDate" className="form-label">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            className="form-control"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="col-md-4 align-self-end">
          <button className="btn btn-primary" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
      <div className="mt-4">
        <canvas ref={chartRef} width={400} height={200}></canvas>
      </div>
    </div>
  );
};

export default Day21;
