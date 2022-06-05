import React from 'react';

function Button({ children, version, type, isDisabled }) {
  console.log(children);
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

export default Button;
