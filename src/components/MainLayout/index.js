import React from 'react';
import { Container } from 'react-bootstrap';

const MainLayout = ({ children }) => {
  return (
    <Container fluid className="h-100 p-3">
      {children}
    </Container>
  );
};

export default MainLayout;
