import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';
import FetchUser from './components/fetchuser/FetchUser';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={FetchUser}/>
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;