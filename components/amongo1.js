import React, { Component } from "react";
import Axios from 'axios';
import A3 from './a3';

class Stock2 extends Component {
 
  constructor(props){
      super(props)

      this.state = {rows:[]}     
      
  }
  componentDidMount(){
      this.search('L')
  }
  search = (keyword)=>{
      console.log(keyword)
      var dataArray =[]
      var url = "http://newsapi.org/v2/top-headlines?country=th&category=business&apiKey=ad6868b099b840679186eaad7fe36930" + keyword;
      Axios.get(url).then(articles=>{
          console.log(JSON.stringify(articles.data.articles))
          articles.data.articles.forEach(item=>{
            item.poster_src = "https://s.isanook.com/mn/0/rp/rc/w700h366/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21uLzAvdWQvMTU3Lzc4OTU1OS90YmFuay5qcGc=.jpg" + item.urlToImage
            dataArray.push(item)
          })
          this.setState({rows: dataArray});
      })
  }


render() {
    return (
        <div className="App"> 
            <table className="NavBar">
                <tbody>
                    <tr>
                        <td>
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
                            alt="avatar"
                            className="avatar-img"
                        />   
                        </td>
                        <td>
                            Codemobiles React.js
                        </td>
                    </tr>
                </tbody>
            </table>
            <input style={{fontSize:24,display:'block',width:'100',paddingLeft: 8}}
                placeholder="enter news "
                onChange={(event)=>{this.search(event.target.value)} }/>
            
            {this.state.rows.map(item =>(
                <div>
                    <strong>{item.title}</strong>
                </div>
            )) }
            
        </div>   
        
    );
}
}

export default Stock2;