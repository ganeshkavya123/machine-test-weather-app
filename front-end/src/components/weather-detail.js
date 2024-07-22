import React, { useEffect, useState } from "react";
import { WiCloudy, WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";
import { FiChevronDown } from "react-icons/fi"; 
import { useLocation } from 'react-router-dom';
import axios from "axios";

const WeatherDetail = () =>{

    const times = [
        { time: "Now", temp: "25°C" },
        { time: "2 AM", temp: "24°C" },
        { time: "3 AM", temp: "23°C" },
        { time: "4 AM", temp: "22°C" },
        { time: "5 AM", temp: "21°C" },
        { time: "6 AM", temp: "20°C" },
        { time: "7 AM", temp: "19°C" },
        { time: "8 AM", temp: "18°C" },
        { time: "9 AM", temp: "17°C" },
        { time: "10 AM", temp: "16°C" },
      ];

      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const city = queryParams.get('location');

      const [ weatherDetails, setWeatherDetails] = useState(null)

      useEffect(()=>{

        const fetchWeatherDetails = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/api/location-weather?City=${city}`);
              setWeatherDetails(response.data.data);
            } catch (error) {
              console.error("Error fetching weather details:", error);
            }
          };
      
          fetchWeatherDetails();

      },[city])

      const getWeatherIcon = (weatherName, sizeClass) => {
        switch (weatherName) {
          case 'Clear':
            return <WiDaySunny size={118} className={`text-yellow-500 ${sizeClass}`}/>;
          case 'Clouds':
            return <WiCloudy size={118} className={`text-gray-500 ${sizeClass}`} />;
          case 'Rain':
            return <WiRain size={118} className= {`text-blue-500 ${sizeClass}`}/>;
          case 'Snow':
            return <WiSnow size={118} className= {`text-white ${sizeClass}`}/>;
          case 'Thunderstorm':
            return <WiThunderstorm size={118} className={`text-yellow-500 ${sizeClass}`} />;
          case 'Fog':
          case 'Mist':
          case 'Smoke':
          case 'Haze':
            return <WiFog size={118} className= {`text-gray-500 ${sizeClass}`} />;
          default:
            return <WiCloudy size={118} className={`text-gray-500 ${sizeClass}`} />;
        }
      };

return(
    <div className="main-container p-12">
    {/* <div className="grid grid-rows-3 grid-flow-col gap-12"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="row-span-3 bg-none p-12 shadow rounded-lg">
       
        <div href="#" class="solid-whether-card mt-12">

        {weatherDetails ? (
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Weather in {weatherDetails.Location}
                </h5>
                <p className="weather-card-today flex items-center justify-center">Today 
                    <FiChevronDown size={24} className="chevron-down-icon mt-2" />
                </p>
                
                <div className="flex items-center mr-5 mt-5 mb-5">
                {getWeatherIcon(weatherDetails.WeatherName, "text-3xl md:text-5xl")}
                <span className="font-bold-temp text-3xl md:text-5xl font-medium ml-2">{weatherDetails.Temperature}°C</span>
                </div>
                <p className="weather-card-text flex items-center justify-center">
                  {weatherDetails.Description}
                </p>
               
                <p className="weather-card-text flex items-center justify-center">
                   {weatherDetails.DateTime}
                </p>
              </div>
            ) : (
              <p>Loading weather details...</p>
            )}
        </div>

      </div>
      <div className="row-span-2 col-span-2 bg-none p-12 shadow rounded-lg flex items-center justify-center">
       <div className="transparent-whether-card">
      
       <div className="row-span-3 grid-item p-4">
       <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
            {times.slice(0, 5).map((item, index) => (
              <li key={index} className="me-4 md:me-6 flex flex-col items-center p-4">
                <span>{item.time}</span>
                 <div className="flex items-center mt-2">
                  <WiCloudy size={24} className="text-gray-500 me-2" />
                  <span>{item.temp}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-300 mt-4"></div>
          <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white mt-4">
            {times.slice(5).map((item, index) => (
              <li key={index} className="me-4 md:me-6 flex flex-col items-center p-4">
                <span>{item.time}</span>
                <div className="flex items-center mt-2">
                  <WiCloudy size={24} className="text-gray-500 me-2" />
                  <span>{item.temp}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
       </div>
      </div>
      <div className="col-span-2 bg-none p-12 shadow rounded-lg">
        <h3 className="random-text">Random Text</h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada lacus eget accumsan auctor. 
        </p>
        
      </div>
    </div>
  </div>
);
}

export default WeatherDetail;