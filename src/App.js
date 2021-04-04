import { Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Scienc from './components/Scienc'
import SciencCity from './components/City.js'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'

const CityNames = [
  {'enName':'Keelung', 'name':'基隆市'},
  {'enName':'NewTaipei', 'name':'新北市'},
  {'enName':'Taipei', 'name':'臺北市'},
  {'enName':'YilanCounty', 'name':'宜蘭縣'},
  {'enName':'Taoyuan', 'name':'桃園市'},
  {'enName':'Hsinchu', 'name':'新竹市'},
  {'enName':'HsinchuCounty', 'name':'新竹縣'},
  {'enName':'MiaoliCounty', 'name':'苗栗'},
  {'enName':'Taichung', 'name':'臺中市'},
  {'enName':'ChanghuaCounty', 'name':'彰化縣'},
  {'enName':'NantouCounty', 'name':'南投縣'},
  {'enName':'YunlinCounty', 'name':'雲林縣'},
  {'enName':'ChiayiCounty', 'name':'嘉義縣'}, 
  {'enName':'Chiayi', 'name':'嘉義市'}, 
  {'enName':'Tainan', 'name':'臺南市'},
  {'enName':'Kaohsiung', 'name':'高雄市'},
  {'enName':'PingtungCounty', 'name':'屏東縣'},
  {'enName':'TaitungCounty', 'name':'台東縣'},
  {'enName':'HualienCounty', 'name':'花蓮縣'},
  {'enName':'PenghuCounty', 'name':'澎湖縣'},
  {'enName':'KinmenCounty', 'name':'金門縣'},
  {'enName':'LienchiangCounty', 'name':'連江縣'},
]


function App(){
  const renderCityList = 
    CityNames.map((data, index) =>
        <Link key={index} to={`/sciencSpot/${data.enName}`} className="nav-link">{data.name}</Link>
  )
  
  return(
    <div>
      <Navbar id="top-nav" bg="light" expand="lg">
        <Link to="/" className="navbar-brand"> Demo </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/sciencSpot" className="nav-link">全部景點</Link>
              {renderCityList}
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/sciencSpot"> <Scienc /> </Route>
      <Route path="/sciencSpot/:city" component={SciencCity}></Route>
      
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
