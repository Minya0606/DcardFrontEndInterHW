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
let fetchNew = true //控制是否抓取資料，避免scroll 抓取多次
class SciencCity extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            points:[],
            skip:30,
            noMorePoints: false,
        }
    }
    componentDidMount(){
        const {city} = this.props.match.params
        
        window.addEventListener('scroll', this.isBottom)

        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30`)
        .then(res => res.json())
        .then(data => {
            let noMorePoints = data.length <30 ?true:false
            if(data.length > 0)
                this.setState({
                    points: data,
                    noMorePoints:noMorePoints
                })
            else
                this.setState({
                    noMorePoints:true
                })
        })
        .catch(err => console.log("err", err))
    }

    componentDidUpdate(prevProps){
        const {city} = this.props.match.params
        fetchNew = true 

        if(prevProps.match.params.city !== city) //判斷是否是不同城市
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30`)
            .then(res => res.json())
            .then(data => {
                let noMorePoints = data.length <30 ? true:false //判斷是否還有更多資料
                if(data.length > 0)
                    this.setState({
                        points: data,
                        noMorePoints:noMorePoints,
                        skip:30
                    })
                else{
                    this.setState({
                        noMorePoints:true
                    })
                    fetchNew = false
                }
            })
            .catch(err => console.log("err", err))
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.isBottom)
    }

    isBottom = () =>{
        const { skip, points, noMorePoints } = this.state
        const {city} = this.props.match.params
        if(!noMorePoints) //判斷是否還有更多資料
            if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
                //抓取後30筆資料
                if(fetchNew){//控制是否抓取新資料
                    fetchNew = false
                    fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$skip=${skip}`)
                    .then(res => res.json())
                    .then(data => {
                        if(!data.message){
                            let merged = points.concat(data) //串接前面的景點資料
                            let noMorePoints = merged.length < skip+30? true:false //判斷是否還有更多資料
                            this.setState({
                                skip:skip+30,
                                points:merged,
                                noMorePoints:noMorePoints
                            })
                        }
                        else{
                            this.setState({
                                noMorePoints:true
                            })
                            fetchNew = false
                        }
                    })
                    .catch(err => console.log("err", err))
                }
                
                
            }
              
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
        fetchNew = true
        return tags
    }
    
   

    render(){
        const {points, noMorePoints} = this.state
        const {city} = this.props.match.params
        return(
            <Container style={{"marginTop": "110px"}}>
                <Table>
                    {city ? this.showCityName() : null}
                    <tbody id="show-points">
                        {points.length>1 ?this.renderPoints(): null}
                        {noMorePoints?<tr><td colSpan="2">沒有更多景點了</td></tr>:null}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default SciencCity;