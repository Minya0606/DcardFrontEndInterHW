import React from 'react'
import {Table} from 'react-bootstrap'

class Scienc extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          flag:30,
          points:[]
        }
    }
    componentDidMount(){
        //增加捲動至底部之監聽事件
        window.addEventListener('scroll', this.isBottom)

        //抓取前30比景點資料
        fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${this.state.flag}`)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0)
              this.setState({
                points:data
              })
            else
              alert("沒有更多景點了!")
        })
    }
    
    //移除捲動至底部之監聽事件
    componentWillUnmount(){
        window.removeEventListener('scroll', this.isBottom)
    }

    //移動至底部之事件
    isBottom = () =>{
      const { flag, points } = this.state
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
          //抓取後30筆資料
          fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${flag+30}&$skip=${flag}`)
          .then(res => res.json())
          .then(data => {
            if(data.length >0){
              //串接前面的景點資料
              let merged = points.concat(data)
              this.setState({
                flag:flag+30,
                points:merged
              },console.log("flag", flag, data))
            }
            else
              alert("沒有更多景點了!")
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
                        <td>{data.Name}</td>
                        <td>{data.Description}</td>
                    </tr> 
                )
            })
        return pointTags
    }

    
    render() {
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
                    </tbody>
                </Table>
                
            </div>
        )
    }
}

// function Sciencs (){
//     const [views, setViews] = useState({})

// //   useEffect(() =>{
// //     // fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${flag}`)
// //     fetch(`./test.txt`)
// //     .then(res => res.json())
// //     .then(data => {
// //       console.log(data)
// //       setViews(data)
// //     })
// //   }, [])
//     // useEffect(() => {
//     //     const onScroll = () =>{
//     //         const element = document.getElementById('header')
//     //         console.log(element.target.scrollHeight , element.target.scrollTop , element.target.clientHeight)
//     //         const bottom = element.target.scrollHeight - element.target.scrollTop === element.target.clientHeight
//     //         console.log('reached')
//     //     }
//     //     window.addEventListener('scroll', onScroll)
//     //     return () => {
//     //         window.removeEventListener('scroll', onScroll)
//     //     }
//     // }, [])
//     // const isBottom = (el) =>  {
//     //     return el.getBoundingClientRect().bottom <= window.innerHeight;
//     //   }
//     // const scrollbottom = () =>{
//     //     const wrappedElement = document.getElementById('header');
//     //     if (isBottom(wrappedElement)) {
//     //         console.log('header bottom reached');
//     //         document.removeEventListener('scroll', scrollbottom);
//     //     }
//     // }
//     // const isBottom = e =>{
//     //     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     //     console.log("reach")
//     // }
  
     
//   const render_component = 
//     test.map((data, index) =>{
//       return(
//         <tr key={index} id={index}>
//             <td>{data.Name}</td>
//             <td>{data.Description}</td>
//         </tr> 
//       )
//     })
  
//     return (
//         <Container id="header" >
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th width="20%">名稱</th>
//                         <th width="80%">簡介</th>
//                     </tr>
//                 </thead>
//                 {render_component}
//             </Table>
            
//         </Container>
//     )
// }

export default Scienc;