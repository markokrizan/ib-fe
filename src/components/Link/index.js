import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ children, ...rest }) => {
  return (
    <Link className="text-decoration-none text-reset" {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
