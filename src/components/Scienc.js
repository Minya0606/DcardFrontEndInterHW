import React from 'react'
import {Table} from 'react-bootstrap'

class Scienc extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          flag:30,
          points:[],
          noPoints:false,
        }
    }
    componentDidMount(){
        //增加捲動至底部之監聽事件
        window.addEventListener('scroll', this.isBottom)

        //抓取前30比景點資料
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30`)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0)
              this.setState({
                points:data
              })
            else{
              this.setState({
                noPoints:true
              })
            }
        })
    }
    
    //移除捲動至底部之監聽事件
    componentWillUnmount(){
        window.removeEventListener('scroll', this.isBottom)
    }

    //移動至底部之事件
    isBottom = () =>{
      const { flag, points, noPoints } = this.state
      if(!noPoints)//判斷是否抓取新資料
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
          //抓取後30筆資料
          fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${flag}`)
          .then(res => res.json())
          .then(data => {
            if(data.length >0){
              let merged = points.concat(data) //串接前面的景點資料
              let noPoints = merged.length >= flag+30? true:false //控制是否抓取新資料
              this.setState({
                flag:flag+30,
                points:merged,
                noPoints:noPoints
              })
            }
            else{
              this.setState({
                noPoints:true,
                fetchNew:false
              })
            }
          })
        }
            
    }

    //渲染景點
    renderPoints() { 
        let pointTags = []
        
        if (this.state.points.length > 0) 
          pointTags = this.state.points.map((data, index) =>{
                return(
                    <tr key={index} id={index}>
                        <td>{index}{data.Name}</td>
                        <td>{data.Description}</td>
                    </tr> 
                )
            })
        return pointTags
    }

    
    render() {
      const {noPoints} = this.state
        return(
            <div className="container" id="header">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th width="20%">名稱</th>
                            <th width="80%">簡介</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPoints()}
                        {noPoints?<tr><td colSpan="2" style={{"color":"red"}}>沒有更多景點了</td></tr>:null}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}

export default Scienc;