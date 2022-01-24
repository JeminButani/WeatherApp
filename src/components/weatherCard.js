import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-cloud");
          break;
        case "Haze":
          setWeatherState("wi-dust");
          break;
        case "Clear":
          if (isNight) {
            setWeatherState("wi-night-clear");
          } else {
            setWeatherState("wi-day-sunny");
          }
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Snow":
          setWeatherState("wi-snow");
          break;
        case "Smoke":
          setWeatherState("wi-smoke");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        case "Windy":
          setWeatherState("wi-strong-wind");
          break;
        case "Thunderstorm":
          setWeatherState("wi-thunderstorm");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //convert seconds to time for the sunset
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  const isNight = () => {
    var date = new Date();
    return date.getHours() > 18 && date.getHours() < 6;
  };

  return (
    <>
      {/* our temp box */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        \
        <div className="weatherInfo">
          {" "}
          <div className="temperature">
            <span className="wi wi-thermometer">{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date ">{new Date().toLocaleString()}</div>
        {/* our 4 column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                1{speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
