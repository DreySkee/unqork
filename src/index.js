import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import style from './style';

import PrivateRoute from 'components/PrivateRoute';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LogIn from 'components/LogIn';
import DashboardContainer from 'components/DashboardContainer';
import Dashboard from 'components/Dashboard';
import Activity from 'components/Activity';
import Profile from 'components/Profile';
import Settings from 'components/Settings';

ReactDOM.render(
  <div className="page"> 
    <Router>
      <React.Fragment>
        <Header />
        <Switch>    
          <Route exact  path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact  path="/login" component={LogIn} />
          <DashboardContainer>
            <Switch>
              <PrivateRoute exact path="/dashboard"  component={Dashboard} />
              <PrivateRoute exact path="/activities/:activity" component={Activity} /> 
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <Redirect to={{ pathname: '/dashboard' }} />
            </Switch>   
          </DashboardContainer>
          <Redirect to={{ pathname: '/dashboard' }} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  </div>
, document.getElementById('root'));
registerServiceWorker();


