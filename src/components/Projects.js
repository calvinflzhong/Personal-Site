import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/maple-financial.png';
// import projImg2 from '../assets/img/project-img2.png';
// import projImg3 from '../assets/img/project-img3.png';
// import colorSharp from '../assets/img/color-sharp.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className='project' id='project'>
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
                  <h2>Projects</h2>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Maple Financial</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          <center>
                            <p>
                              Website created for a financial and wealth
                              management company using JavaScript, React,
                              Bootstrap and deployed with Netlify.
                            </p>
                            <a
                              class='btn btn-primary'
                              href='http://www.maplefinancial.org'
                              role='button'
                              target='_blank'
                              rel='noreferrer'
                            >
                              Demo
                            </a>
                          </center>
                        </Row>
                        <br></br>
                        <img src={projImg1} alt='Maple Financial'></img>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>Coming soon!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>Coming soon!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-right' src={colorSharp}></img> */}
    </section>
  );
};
