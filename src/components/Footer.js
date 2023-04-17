import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            © All rights reserved. Calvin Zhong
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
