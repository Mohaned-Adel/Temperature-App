import { Component } from "react";

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  error,
}) => {
  return (
    <div className="info">
      {temperature && (
        <p className="info-key">
          Temperature:
          <span className="info-value"> {temperature} </span>
        </p>
      )}
      {city && (
        <p className="info-key">
          City:
          <span className="info-value"> {city} </span>
        </p>
      )}
      {country && (
        <p className="info-key">
          Country:
          <span className="info-value"> {country} </span>
        </p>
      )}
      {humidity && (
        <p className="info-key">
          Humidity:
          <span className="info-value"> {humidity} </span>
        </p>
      )}
      {description && (
        <p className="info-key">
          Description:
          <span className="info-value"> {description} </span>
        </p>
      )}
      {error && (
        <p className="info-key">
          error:
          <span className="info-value"> {error} </span>
        </p>
      )}
    </div>
  );
};

export default Weather;
