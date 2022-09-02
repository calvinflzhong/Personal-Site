import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { SkillCard } from './SkillCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skills = [
    {
      title: 'Javascript',
    },
  ];

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <br></br>

                  <br></br>
                  <br></br>

                  <h2>Technological Skills</h2>
                  <center>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                      <Nav
                        variant='pills'
                        className='nav-pills mb-5 justify-content-center align-items-center'
                        id='pills-tab'
                      ></Nav>
                      <Tab.Content
                        id='slideInUp'
                        className={
                          isVisible
                            ? 'animate__animated animate__slideInUp'
                            : ''
                        }
                      >
                        <Tab.Pane eventKey='first'>
                          <Row>
                            {skills.map((skill, index) => {
                              return <SkillCard key={index} {...skill} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </center>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-right' src={colorSharp2}></img> */}
    </section>
  );
};
