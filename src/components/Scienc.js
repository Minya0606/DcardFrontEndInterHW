import React from 'react'
import {Table, Container} from 'react-bootstrap'

let fetchNew = true
class Scienc extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          skip:30,
          points:[],
          noMorePoints:false,
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
                noMorePoints:true
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
      const { skip, points, noMorePoints} = this.state
      if(!noMorePoints)//判斷是否還有更多資料
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
          if(fetchNew){//判斷是否抓取新資料
            fetchNew = false
            //抓取後30筆資料
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${skip}`)
            .then(res => res.json())
            .then(data => {
              if(data.length >0){
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
                  console.log("data has message")
                  this.setState({
                    noMorePoints:true,
                  })
                  fetchNew = false
                }
              }
              else{
                this.setState({
                  noMorePoints:true,
                })
                fetchNew = false
              }
            })
          }
          
        }
            
    }

    //渲染景點
    renderPoints() { 
        let pointTags = []
        
        if (this.state.points.length > 0) 
          pointTags = this.state.points.map((data, index) =>{
                return(
                    <tr key={index} id={index}>
                        <td>{`${index+1}. ${data.Name}`}</td>
                        <td>{data.Description}</td>
                    </tr> 
                )
            })
        
        fetchNew = true
        return pointTags
    }

    
    render() {
      const {noMorePoints} = this.state
        return(
            <Container fluid style={{"marginTop": "110px"}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th width="20%">名稱</th>
                            <th width="80%">簡介</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPoints()}
                        {noMorePoints?<tr><td colSpan="2" style={{"color":"red"}}>沒有更多景點了</td></tr>:null}
                    </tbody>
                </Table>
                
            </Container>
        )
    }
}

export default Scienc;