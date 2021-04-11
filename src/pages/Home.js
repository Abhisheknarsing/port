import React from 'react'
import {Col} from 'react-bootstrap'

// components
import Banner from '../components/Banner'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ArrowUp from '../components/ArrowUp'

const Home = () => {
  return (
    <Col xl={10} lg={9} md={12} sm={12} xs={12} className="p-0">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ArrowUp />
    </Col>
  )
}

export default Home
