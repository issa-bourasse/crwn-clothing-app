import React from "react";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonTyppe, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonTyppe]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;