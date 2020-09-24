import React, { Component } from "react";
import { getData } from "./what";

class DB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
  async componentDidMount() {
    this.setState({
      data: await getData()
    })
    console.log(this.state.data)
  }
  render() {

    var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
    }
    return (
      <div className="App">
         <h1>{this.state.data} </h1>
      </div>

    );
  }
} export default DB;

