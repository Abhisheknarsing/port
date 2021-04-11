import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import {GiSmartphone} from 'react-icons/gi'
import {HiOutlineMail, HiLocationMarker} from 'react-icons/hi'
import emailjs from 'emailjs-com'
import data from '../Data/Data.json'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {ImSpinner7} from 'react-icons/im'

const Contact = () => {
  const {Address, email: personalEmail, mobile} = data.abhishek.contact
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault()
    emailjs
      .sendForm(
        'service_whvhwmj',
        'template_cby0d2r',
        e.target,
        'user_7hTZmhLJFSlYAnNOYPf7e'
      )
      .then(
        (result) => {
          toast.success('Successfully sent', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setFullName('')
          setEmail('')
          setPhoneNumber('')
          setMessage('')
          setLoading(false)
        },
        (error) => {
          toast.error(error?.message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setLoading(false)
        }
      )
  }

  return (
    <>
      <div className='contact' id='contact'>
        <Container fluid>
          <div className='section__title'>
            <h3>Contact Me</h3>
          </div>
          <div className='contact__container'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className='left'>
                  <h4>Get In Touch</h4>
                  <Form onSubmit={sendEmail}>
                    <Form.Group>
                      <Form.Label>
                        Full Name <sup className='text-danger'>*</sup>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        name='from_name'
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Email <sup className='text-danger'>*</sup>
                      </Form.Label>
                      <Form.Control
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Phone Number <sup className='text-danger'>*</sup>
                      </Form.Label>
                      <Form.Control
                        type='tel'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        name='phone_number'
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Message <sup className='text-danger'>*</sup>
                      </Form.Label>
                      <Form.Control
                        as='textarea'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name='message'
                      />
                    </Form.Group>
                    <Button type='submit' block>
                      {loading ? <ImSpinner7 className='spinner' /> : 'Submit'}
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className='right'>
                  <div className='info'>
                    <div className='left'>
                      <GiSmartphone className='contact__icon' />
                    </div>
                    <div className='r'>
                      <a rel='noopener noreferrer' href={`tel:${mobile}`}>
                        {mobile}
                      </a>
                    </div>
                  </div>
                  <div className='info'>
                    <div className='left'>
                      <HiOutlineMail className='contact__icon' />
                    </div>
                    <div className='r'>
                      <a
                        rel='noopener noreferrer'
                        href={`mailto:${personalEmail}`}
                      >
                        {personalEmail}
                      </a>
                    </div>
                  </div>
                  <div className='info'>
                    <div className='left'>
                      <HiLocationMarker className='contact__icon' />
                    </div>
                    <div className='r'>
                      <a rel='noopener noreferrer' href='javascript:void(0)'>
                        {Address}
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </>
  )
}

export default Contact
