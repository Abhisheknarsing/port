import React from 'react'
import Particles from 'react-particles-js'
import {FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

// data
import data from '../Data/Data.json'

const Banner = () => {
  const {name, description, tagline} = data.abhishek.personalInfo

  const {facebook, github, linkedin, instagram} = data.abhishek.socialLinks

  return (
    <div className='banner'>
      <Particles
      className="js"
        style={{
          width: '100%',
          height: '100px',
        }}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className='content'>
        <h1>{name}</h1>
        <h4>{tagline}</h4>
        <p>{description}</p>
        <div className='social_links'>
          <a
            href={facebook}
            className='icon__wrapper'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookF className='social_icon' />
          </a>
          <a
            href={github}
            className='icon__wrapper'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='social_icon' />
          </a>
          <a
            href={linkedin}
            className='icon__wrapper'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn className='social_icon' />
          </a>
          <a
            href={instagram}
            className='icon__wrapper'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='social_icon' />
          </a>
        </div>
        <a download href='' className='download__btn'>
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Banner
