import React from 'react';
import './button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonClass = BUTTON_TYPE_CLASSES[buttonType] || '';

  return (
    <button className={`button-container ${buttonClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;