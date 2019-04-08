import React, { Component } from "react";

const Form = props => {
  return (
    <form className="form-container" onSubmit={props.getWeather}>
      <input
        className="city-input"
        type="text"
        name="city"
        placeholder="City..."
      />
      <input
        className="country-input"
        type="text"
        name="country"
        placeholder="Country..."
      />
      <button className="btn btn-primary btn-sm m-2">Get Weather</button>
    </form>
  );
};

export default Form;
