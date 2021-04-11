import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import {Col} from 'react-bootstrap'
import data from '../Data/Data.json'
import {v4 as uuidv4} from 'uuid'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const SideNavbar = () => {
  const {image, fullName} = data.abhishek.personalInfo
  const links = [
    {
      id: uuidv4(),
      to: '/#home',
      name: 'Home',
      className: 'li active',
    },
    {
      id: uuidv4(),
      to: '/#about',
      name: 'About',
      className: 'li',
    },

    {
      id: uuidv4(),
      to: '/#skills',
      name: 'Skills',
      className: 'li',
    },
    {
      id: uuidv4(),
      to: '/#projects',
      name: 'Projects',
      className: 'li',
    },
    {
      id: uuidv4(),
      to: '/#contact',
      name: 'Contact',
      className: 'li',
    },
  ]
  const handleActiveClass = (index) => {
    const navLinks = document.querySelectorAll('.li')
    navLinks.forEach((x) => x.classList.remove('active'))
    navLinks[index].classList.add('active')
  }

  const handleNavbar = () => {
    const me = document.getElementById('nav__Sidebar')
    me.classList.toggle('makeVisibleOne')
  }
  return (
    <Col xl={2} lg={3} md={0} className='p-0'>
      <div className='nav__Sidebar' id='nav__Sidebar'>
        <div className='user__wrapper'>
          <div className='image__wrapper'>
            <img src={image} alt='abhi' />
          </div>
        </div>
        <div className='nav__links'>
          {links.map((x, i) => (
            <ul className='link__wrapper' key={x.id}>
              <Link to={x.to}>
                <li
                  onClick={() => handleActiveClass(i)}
                  className={x.className && x.className}
                >
                  <p>{x.name}</p>
                </li>
              </Link>
            </ul>
          ))}
        </div>
        <div className='nav__footer'>
          <h6 className='text-white'>
            &copy; {new Date().getFullYear()} {fullName}
          </h6>
        </div>
        <div className='choose'>
          <RiMenu3Line className='ti' onClick={handleNavbar} />
        </div>
      </div>
    </Col>
  )
}

export default SideNavbar
