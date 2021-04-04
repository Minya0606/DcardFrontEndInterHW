import React, { useState, useEffect} from 'react'
import { Route, Link} from 'react-router-dom'
import { Container, Table, Row, Col, ListGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
 
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

function SciencCity(){
  let {city} = useParams()
  const [points, setPoints] = useState([])
  const [flag, setFlag] = useState(30)
  const [noPoints, setNoPoints] = useState(false)
  useEffect(() =>{
    let active = true
    setFlag(30)
    //請求當前 city 之前30比景點資料
    fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${flag}`)
    .then(res => res.json())
    .then(data => {
        if(active){
          if(data.length > 0)
            setPoints(data)
          }
          else
            // alert("沒有更多景點了!")
            setNoPoints(true)
    })
    .catch(err => console.log("err", err))

    //加入捲動至底部事件監聽
    window.addEventListener('scroll', isBottom)
    
    return() => {
        active = false
        window.removeEventListener('scroll', isBottom)  //移除捲動至底部事件監聽
    }
  }, [city])  

  //捲動至底部事件
  const isBottom = () =>{
    console.log(window.innerHeight , window.scrollY,  document.body.offsetHeight, document.getElementById('root').scrollTop)
    // if(window.innerHeight + window.pageYOffset > document.body.offsetHeight){
      if(window.innerHeight + window.pageYOffset > document.body.offsetHeight){
        setTimeout(()=>{
        //請求後30比之景點資料
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${flag+30}&$skip=${flag}`)
        .then(res => res.json())
        .then(data => {
            if(data.length >0){
              setPoints(points.concat(data))
              setFlag(flag+30)
              console.log("flag", flag)
            }
            else
              // alert("沒有更多景點了!")
              setNoPoints(true)
        })
        .catch(err => console.log("flag"))
      }, 100)
    } 
         
  }

  //Render 景點清單
  const renderPoints = 
    points.map((data, index) =>
      <tr key={index}>
        <td>{`${index+1}. `}{data.Name}</td>
      </tr>
  )

  //渲染城市名稱
  const tableHeader = ()=> {
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

  return(
      <Container>
          <Table>
              {points.length>1 ? tableHeader() : null}
              <tbody>
                  {city.length>0 ?renderPoints: null}
                  <div id="c"></div>
                  {noPoints?<tr><td colSpan="2">沒有更多景點了</td></tr>:null}
              </tbody>
          </Table>
      </Container>
  )
}



export default SciencCity;