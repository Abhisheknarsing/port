import React from 'react'
import {Col, Container, Row, Image} from 'react-bootstrap'

// data
import data from '../Data/Data.json'

const About = () => {
  const {aboutBio, about_pic, name, tagline} = data.abhishek.personalInfo
  return (
    <section className='about' id='about'>
      <Container fluid>
        <div className='section__title'>
          <h3>About</h3>
        </div>
        <div className='about__container'>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className='about__left'>
                <Image src={about_pic} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className='about__right'>
                <h1>{name}</h1>
                <h4>{tagline}</h4>
                <p>{aboutBio}</p>
                <a download href='' className='download_resume'>
                  Download Resume
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default About
