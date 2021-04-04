import React from 'react'
import { Route, Link} from 'react-router-dom'
import { Container, Table, Row, Col, ListGroup} from 'react-bootstrap'
 
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

class SciencCity extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            points:[],
            flag:30,
            noPoints: true,
        }
    }
    componentDidMount(){
        const {flag} = this.state
        const {city} = this.props.match.params
        console.log(city)
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${flag}`)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0)
                this.setState({
                    points: data
                })
            else
                // alert("沒有更多景點了!")
                this.setState({
                    noPoints:false
                })
        })
        .catch(err => console.log("err", err))
    }

    showCityName(){
        const {city} = this.props.match.params
        const name = CityNames.map(data => {
            if(data.enName == city)
                return data.name
        })
        return(
            <thead>
                <tr>
                    <th>{name}的景點 : </th>
                </tr>
            </thead>
        )
    }
    
    renderPoints(){
        let tags = []
        tags = this.state.points.map((data, index) =>
            <tr key={index}>
                <td>{`${index+1}. `}{data.Name}</td>
            </tr>
        )
        return tags
    }
        

    render(){
        const {points, noPoints} = this.state
        const {city} = this.props.match.params
        console.log(city)
        return(
            <Container>
                <Table>
                    {city ? this.showCityName() : null}
                    <tbody>
                        {points.length>1 ?this.renderPoints: null}
                        {noPoints?<tr><td colSpan="2">沒有更多景點了</td></tr>:null}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default SciencCity;