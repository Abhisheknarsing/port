import React from 'react'
import {Col, Container, Row, Image} from 'react-bootstrap'
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiNodeDotJs,
  SiGit,
  SiGithub,
  SiReact,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiPython,
  SiVisualstudiocode,
  SiAtom,
  SiFirebase,
  SiMaterialUi,
  SiSass,
  SiJava,
  SiSpring,
  SiPhp,
} from 'react-icons/si'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <Container fluid>
        <div className='section__title'>
          <h3>Skills</h3>
        </div>
        <div className='skills__container'>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3>Programming</h3>
              <div className='skills__wrapper'>
                <div className='icon__wrapper__f'>
                  <SiPython className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiJavascript className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiJava className='icon__f' />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3>Web Technologies</h3>
              <div className='skills__wrapper'>
                <div className='icon__wrapper__f'>
                  <SiReact className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiBootstrap className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiSass className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiHtml5 className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiCss3 className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiSpring className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiPhp className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiPhp className='icon__f' />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3>Databases</h3>
              <div className='skills__wrapper'>
                <div className='icon__wrapper__f'>
                  <SiMongodb className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiMysql className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiFirebase className='icon__f' />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3>Tools</h3>
              <div className='skills__wrapper'>
                <div className='icon__wrapper__f'>
                  <SiGit className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiGithub className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiVisualstudiocode className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiAtom className='icon__f' />
                </div>
                <div className='icon__wrapper__f'>
                  <SiPostman className='icon__f' />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Skills
