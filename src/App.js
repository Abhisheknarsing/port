import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

//components
import SideNavbar from './components/SideNavbar'
import {Row, Container} from 'react-bootstrap'

const App = () => {
  return (
    <div className='app'>
      <Container fluid>
        <Row>
          <Router>
            <SideNavbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Router>
        </Row>
      </Container>
    </div>
  )
}

export default App
