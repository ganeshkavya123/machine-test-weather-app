import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WeatherHistory = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getWeatherHistory();
  }, []);

  const getWeatherHistory = async (fromDate = "", toDate = "") => {
    let url = "http://localhost:3001/api/weather-history";

    if (fromDate && toDate) {
      url += `?fromDate=${fromDate}&toDate=${toDate}`;
    }

    try {
      const response = await axios.get(url);
      setWeatherData(response.data.data);
    } catch (error) {
      console.error("Error fetching weather history data:", error);
    }
  };

  const handleSearch = () => {
    getWeatherHistory(fromDate, toDate);
  };

  const handleViewMore = (location) => {
    navigate(`/weather?location=${location}`);
  };

  return (
    <div className="table-container p-12">
      <div class="relative overflow-x-auto">
        <div className="flex items-center space-x-4 p-4">
          <input
            type="date"
            className="border border-gray-300 rounded-sm p-2"
            placeholder="Start Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="border border-gray-300 rounded-sm p-2"
            placeholder="End Date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-sm px-4 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-sm">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Weather
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Temperature
              </th>
              <th scope="col" class="px-6 py-3">
                Date Time
              </th>
              <th scope="col" class="px-6 py-3">
                More
              </th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.Location}
                </td>
                <td className="px-6 py-4">{item.WeatherName}</td>
                <td className="px-6 py-4">{item.Description}</td>
                <td className="px-6 py-4">{item.Temperature}°C</td>
                <td className="px-6 py-4">{item.DateTime}</td>
                <td class="px-6 py-4">
                  {/* <a href="/weather" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View More</a> */}
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleViewMore(item.Location)}
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherHistory;
