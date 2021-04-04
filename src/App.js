import { Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Scienc from './components/Scienc'
import SciencCity from './components/City.js'
import {Navbar, Nav} from 'react-bootstrap'

function App(){
  return(
    <div>
      <Navbar bg="light" expand="lg">
      <Link to="/" className="navbar-brand"> Demo </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/scienc" className="nav-link">全部景點</Link>
          <Link to="/sciencCity" className="nav-link">城市景點</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Route exact path="/"> <Home /> </Route>
    <Route path="/scienc"> <Scienc /> </Route>
    <Route path="/sciencCity" component={SciencCity}></Route>
      {/* <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/scenic"><Test1 /></Route>
          <Route path="/scenicCity" component={Test2}/>
      </Switch> */}
    </div>
     
  )
}

function Home (){
  return (
    <div width="100%" align="center">
      Welcome
    </div>
  )
}

export default App;
