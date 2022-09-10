import React from 'react';
import { Col } from 'react-bootstrap';

export const SkillCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={2}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={title} />
        <div className='proj-txtx'>
          <h5>{title}</h5>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
