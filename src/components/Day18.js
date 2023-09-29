import React, { useState } from "react";
import useSWR from "swr";

const Day18 = () => {
  const [city, setCity] = useState("");
  const apiKey = "5cbd4880bb4eb9057f71ca64725a74a5"; // Replace with your actual API key
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data: randomCitiesData, error: randomCitiesError } = useSWR(
    ["randomCities", apiKey],
    (key, apiKey) => {
      const cities = ["New York", "Tokyo", "London"]; // Add more cities if needed
      const randomCityDataPromises = cities.map(async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34654dabb0d4aec6af569ff8b9205396`;
        return fetcher(url);
      });
      return Promise.all(randomCityDataPromises);
    }
  );

  const { data, error } = useSWR(
    city ? [`weatherData-${city}`, apiKey] : null,
    (key, apiKey) => {
      if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34654dabb0d4aec6af569ff8b9205396`;
        return fetcher(url);
      }
      return null;
    }
  );

  const handleSearch = () => {
    // Trigger a revalidation for the user-input city
    if (city) {
      setCity(""); // Clear the input field
    }
  };

  return (
    <>
      <div className="input-group mb-3 w-50 m-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter City Name !!"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {randomCitiesError && <div>Error loading random cities data</div>}
        {randomCitiesData &&
          randomCitiesData.map((cityData, index) => (
            <div className="col" key={index}>
              <div
                className="card mb-4 rounded-3 shadow-sm"
                style={{ width: "21rem" }}
              >
                <div className="card-header">
                  Weather in {cityData.name}, {cityData.sys.country}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-cloud"></i>{" "}
                    {cityData.weather[0].description}
                  </h5>
                  <div className="list-group list-group-light mt-3">
                    <p className="card-text">
                      <i className="fas fa-tint"></i> Humidity:{" "}
                      {cityData.main.humidity}%
                    </p>
                    <p className="card-text">
                      <i className="fas fa-wind"></i> Wind Speed:{" "}
                      {cityData.wind.speed} m/s
                    </p>
                    <p className="card-text">
                      <i className="fas fa-cloud"></i> Cloudiness:{" "}
                      {cityData.clouds.all}%
                    </p>
                    <p className="card-text">
                      <i className="fas fa-compress"></i> Pressure:{" "}
                      {cityData.main.pressure} hPa
                    </p>
                    <p className="card-text">
                      <i className="fas fa-eye"></i> Visibility:{" "}
                      {cityData.visibility} meters
                    </p>
                  </div>
                  <div className="card-footer text-dark mt-3">
                    Last Updated:{" "}
                    {new Date(cityData.dt * 1000).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {error && <div>Error loading weather data for {city}</div>}
        {data && (
          <div className="col">
            <div
              className="card mb-4 rounded-3 shadow-sm"
              style={{ width: "21rem" }}
            >
              <div className="card-header">
                Weather in {data.name}, {data.sys.country}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-cloud"></i> {data.weather[0].description}
                </h5>
                <div className="list-group list-group-light mt-3">
                  <p className="card-text">
                    <i className="fas fa-tint"></i> Humidity:{" "}
                    {data.main.humidity}%
                  </p>
                  <p className="card-text">
                    <i className="fas fa-wind"></i> Wind Speed:{" "}
                    {data.wind.speed} m/s
                  </p>
                  <p className="card-text">
                    <i className="fas fa-cloud"></i> Cloudiness:{" "}
                    {data.clouds.all}%
                  </p>
                  <p className="card-text">
                    <i className="fas fa-compress"></i> Pressure:{" "}
                    {data.main.pressure} hPa
                  </p>
                  <p className="card-text">
                    <i className="fas fa-eye"></i> Visibility: {data.visibility}{" "}
                    meters
                  </p>
                </div>
                <div className="card-footer text-dark mt-3">
                  Last Updated: {new Date(data.dt * 1000).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Day18;
