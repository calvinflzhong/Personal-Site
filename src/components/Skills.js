import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { SkillCard } from './SkillCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/javascript.png';
import projImg2 from '../assets/img/java.png';
import projImg3 from '../assets/img/python.webp';
import projImg4 from '../assets/img/php.webp';
import projImg5 from '../assets/img/mysql.png';
import projImg6 from '../assets/img/git.png';
import projImg7 from '../assets/img/react.png';
import projImg8 from '../assets/img/linux.webp';
import projImg9 from '../assets/img/csharp.png';
import projImg10 from '../assets/img/angularjs.png';

export const Skills = () => {
  const skills = [
    {
      title: 'Javascript',
      description: '',
      imgUrl: projImg1,
    },
    {
      title: 'Java',
      description: '',
      imgUrl: projImg2,
    },
    {
      title: 'C#',
      description: '',
      imgUrl: projImg9,
    },
    {
      title: 'Python',
      description: '',
      imgUrl: projImg3,
    },
    {
      title: 'Php',
      description: '',
      imgUrl: projImg4,
    },
    {
      title: 'MySQL',
      description: '',
      imgUrl: projImg5,
    },
    {
      title: 'Git',
      description: '',
      imgUrl: projImg6,
    },
    {
      title: 'React',
      description: '',
      imgUrl: projImg7,
    },
    {
      title: 'AngularJS',
      description: '',
      imgUrl: projImg10,
    },
    {
      title: 'Linux',
      description: '',
      imgUrl: projImg8,
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
                  <center>
                    <h1>Technological Skills</h1>
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
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='background'
      ></img>
    </section>
  );
};
