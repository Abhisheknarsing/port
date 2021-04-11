import React from 'react'
import {Col, Container, Row, Image} from 'react-bootstrap'
import ProjectLanguages from './ProjectLanguages'
import ProjectLinks from './ProjectLinks'
import data from '../Data/Data.json'

const Projects = () => {
  const projects = data.abhishek.projects

  return (
    <section className='projects' id='projects'>
      <Container fluid>
        <div className='section__title'>
          <h3>Projects</h3>
        </div>
        <div className='projects__container'>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className='projects_wrapper'>
                {projects.map((project, i) => (
                  <div className='project_card' key={i}>
                    <a href={project.projectLinks.github}>
                      <div className='project_card_img'>
                        <img src={project.projectImage} alt='' />
                      </div>
                    </a>
                    <div className='project_description'>
                      <h3> {project.projectName} </h3>
                      <p>{project.projectDescription}</p>
                    </div>
                    <ProjectLanguages languages={project.projectTechStack} />
                    <ProjectLinks links={project.projectLinks} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Projects
