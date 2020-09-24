import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';

import Mainpage from './mainpage';
import Login from './login';
import Register from './register';
import A1 from './a1';
import A2 from './a2';
import A3 from './a3';
// import A4 from './a4';
import Amongo1 from './amongo1';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Mainpage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/a1" component={A1} />
    <Route path="/a2" component={A2} />
    <Route path="/a3" component={A3} />
    {/* <Route path="/a4" component={A4} /> */}
    <Route path="/amongo1" component={Amongo1} />
    
  </Switch>
)

export default Main;
