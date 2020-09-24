import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import Stock from './a2';
import News from './a3';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (

        <div className="wrapper1">

          {/* Project 1 */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card style={{ borderRadius: 10, width: 800, background: "#FFFFFFFF", color: "#Black", float: "left" }}>
                <div >
                  <div class="jumbotron text-center">
                    <h1>ค่าเงินต่างประเทศ</h1>
                    <p> สกุลเงินหลักของโลก</p>
                  </div>
                  <Stock></Stock>
                  <center>
                    <div class="container" >
                      <button type="button" class="btn btn-success">EUR</button>
                      <button type="button" class="btn btn-success">CHF</button>
                      <button type="button" class="btn btn-success">USD</button>
                      <button type="button" class="btn btn-success">JPY</button>
                      <button type="button" class="btn btn-success">GBP</button>
                      <button type="button" class="btn btn-success">CAD</button>
                      <button type="button" class="btn btn-success">AUD</button>
                      <button type="button" class="btn btn-success">NZD</button>
                    </div>
                  </center>
                </div>
                <br></br>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ borderRadius: 10, width: 800, background: "#FFFFFFFF", color: "#Black", float: "right", overflowY: "scroll", height: 800 }}>
                <div class="jumbotron text-center">
                  <h1>ข่าวประจําวัน</h1>
                  <p>ข่าวล่าสุดประจําวัน</p>
                </div>
                <News></News>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ borderRadius: 10, width: 800, background: "#FFFFFFFF", color: "#Black", float: "left", height: 600 }}>

                <div class="jumbotron text-center">
                  <h1>Hightlight หุ้น</h1>
                  <p>Hightlight stock ของเมื่อวาน</p>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>ชื่อ</th>
                      <th>เปิด</th>
                      <th>ปิด</th>
                      <th>ขึ้น</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PTT</td>
                      <td>48.05</td>
                      <td>51.52</td>
                      <td style={{ color: "green " }}>3.47</td>
                    </tr>
                    <tr>
                      <td>AIA</td>
                      <td>48</td>
                      <td>50.5</td>
                      <td style={{ color: "green " }}>2.5</td>
                    </tr>
                    <tr>
                      <td>SCG</td>
                      <td>47</td>
                      <td>49.25</td>
                      <td style={{ color: "green " }}>2.25</td>
                    </tr>
                    <tr>
                      <td>TSB</td>
                      <td>42.5</td>
                      <td>43.75</td>
                      <td style={{ color: "green " }}>1.25</td>
                    </tr>
                    <tr>
                      <td>EE</td>
                      <td>45</td>
                      <td>45.5</td>
                      <td style={{ color: "green " }}>0.25</td>
                    </tr>

                  </tbody>
                </table>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ borderRadius: 10, width: 800, background: "#FFFFFFFF", color: "#Black", float: "right" }}>
                <div class="jumbotron text-center">
                  <h1>กองทุน</h1>
                  <p>NAV กองทุน</p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ borderRadius: 10, width: 800, background: "#FFFFFFFF", color: "#Black", float: "left" }}>
                <div class="jumbotron text-center">
                  <h1>ดัชนี่หุ้นโลก</h1>
                  <p>ตลาดทั่วโลก</p>
                </div>
                <table class="table">

                  <thead>
                    <tr>
                      <th>ชื่อตลาดหุ้น</th>
                      <th>ดัชนี</th>
                      <th>%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DJI</td>
                      <td>27,288.18 </td>
                      <td style={{ color: "green " }}>+140.48 (0.52%) ▲</td>
                    </tr>
                    <tr>
                      <td>DAX</td>
                      <td>12,790.47 </td>
                      <td style={{ color: "green " }}>+196.08 (1.56%) ▲</td>
                    </tr>
                    <tr>
                      <td>SENSEX</td>
                      <td>37,668.42 </td>
                      <td style={{ color: "red " }}>−65.66 (0.17%) ▼</td>
                    </tr>
                    <tr>
                      <td>UKX</td>
                      <td>5,959.95 </td>
                      <td style={{ color: "green " }}>+130.49 (2.24%) ▲</td>
                    </tr>
                    <tr>
                      <td>IB</td>
                      <td>6,765.20 </td>
                      <td style={{ color: "green " }}>+116.60 (1.75%) ▲</td>
                    </tr>

                  </tbody>

                </table>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card style={{ borderRadius: 10, width: 800, background: "#FFFFFFFF", color: "#Black", float: "right" }}>
                <div class="jumbotron text-center">
                  <h1>อัตราดอกเบี้ย(Policy Date)</h1>
                  <p>อัตราดอกเบี้ยรายวัน</p>
                </div>
                <center>
                
                <br></br><br></br><br></br>
                
                <div>
                  <a style={{ textDecoration: "none", color: "green", fontSize: 90 }}>0.50</a>
                </div>
                </center>
              </Card>
            </Grid>
          </Grid>


          {/* Project 2 */}


          {/* Project 3 */}

        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="wrapper1 ">
          <h1><Stock></Stock></h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="bg">
          
          
          <h1></h1>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="wrapper1 ">
          <h1>atom</h1>
        </div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Home</Tab>
          <Tab>หุ้น</Tab>
          <Tab>AI</Tab>
          <Tab>AI</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
