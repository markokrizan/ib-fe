import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({
  children,
  className,
  showActiveStyle = false,
  ...rest
}) => {
  return (
    <NavLink
      className={`text-decoration-none text-reset ${className}`}
      activeClassName={showActiveStyle ? 'text-decoration-underline' : ''}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
