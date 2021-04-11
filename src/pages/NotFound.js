import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {CgArrowLongLeft} from 'react-icons/cg'

const NotFound = () => {
  return (
    <Col xl={10} lg={9} md={12} sm={12} xs={12} className='p-0'>
      <div className='notfound'>
        <div className='notfound_content'>
          <h1>404 Notfound</h1>
          <Link to='/' className='back_to_home link'>
            <CgArrowLongLeft className='icon' /> Back to Home
          </Link>
        </div>
      </div>
    </Col>
  )
}

export default NotFound
