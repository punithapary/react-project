import React from "react";

const LogoContainer = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`logo-container ${className}`}>
      {children}
    </div>
  );
};

export default LogoContainer;
