import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';

import Mainpage from './mainpage';
import Login from './login';
import Register from './register';
import A1 from './a1';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Mainpage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/a1" component={A1} />
  </Switch>
)

export default Main;
