import { Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Scienc from './components/Scienc'
import SciencCity from './components/City.js'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'

function App(){
  return(
    <div>
      <Navbar bg="light" expand="lg">
      <Link to="/" className="navbar-brand"> Demo </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/sciencSpot" className="nav-link">全部景點</Link>
            <Link to="/sciencCity" className="nav-link">城市景點</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/sciencSpot"> <Scienc /> </Route>
      <Route path="/sciencCity" component={SciencCity} />
      
    </div>
     
  )
}

function Home (){
  return (
    <div width="100%" align="center">
      <Container style={{"marginTop":"30px"}}>
        <Row className="justify-content-md-center">
            <Col>
             <h2>Welcome</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center justify-content-sm-center" style={{"marginBottom":"5px"}}>
          <Col sm={6} md={6}>
            <Link to="/sciencSpot" className="btn btn-outline-secondary" style={{"width":"100%"}}>瀏覽全部景點</Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center justify-content-sm-center" style={{"marginBottom":"5px"}}>
          <Col sm={6} md={6}>
            <Link to="/sciencCity" className="btn btn-outline-secondary" style={{"width":"100%"}}>瀏覽縣市景點</Link>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default App;
