import React from "react";
import "./Button.module.css";

const Button = ({ label }) => {
  return (
    <button className="buttonStyle">
      <span className="buttonLabel">{label}</span>
    </button>
  );
};

export default Button;
