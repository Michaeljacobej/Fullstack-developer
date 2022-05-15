import React, { useState } from 'react'
import axios from 'axios'
import "./topbar.css";

export default function Topbar() {
  let itemId;
  var firstName = localStorage.getItem("first-name");
  var lastName = localStorage.getItem("last-name");
  // console.log(x)

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=jakarta&units=imperial&appid=27c9b796de2a64a248d85c6bcef06216`
  let first=localStorage.getItem("first-name")
  let last=localStorage.getItem("last-name")
  const requestOne = axios.get(url);
  requestOne.then(response => {
    setData(response.data)
    console.log(response.data)
  }).catch(error => {
    console.err(error)
  })

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            Welcome, {first} {last}
          </span>
        </div>
        <div className="topRight">
          <p style={{ width: '100%' }}>{data.name}</p>
          {data.main ? <h1 style={{ width: '100%' }}>
            {data.main.temp.toFixed()}°F
            {data.main ? <p className='bold'>humidity: {data.main.humidity}%</p> : null}
            {data.wind ? <p className='bold'>wind speed: {data.wind.speed.toFixed()} MPH</p> : null}
          </h1> : null}
        </div>
      </div>
    </div>
  );
}
