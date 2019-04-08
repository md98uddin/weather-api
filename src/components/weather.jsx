import React, { Component } from "react";

const Weather = props => {
  return (
    <div>
      {props.city && props.country && (
        <p>
          {" "}
          Location: {props.city},{props.country}
        </p>
      )}
      {props.temperature && <p>temperature: {props.temperature}</p>}
      {props.humidity && <p>humidity: {props.humidity}</p>}
      {props.description && <p>condition: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
