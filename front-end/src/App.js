import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherDetail from './components/weather-detail';
import WeatherHistory from './components/weather-history'


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<LoginPageTwo/>}> </Route> */}
        <Route path="/weather" element={<WeatherDetail/>}> </Route>
        <Route path="/weather-history" element={<WeatherHistory/>}> </Route>

      </Routes>
    </Router>
  );
}

export default App;
