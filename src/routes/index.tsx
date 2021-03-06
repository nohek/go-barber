import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Routes';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import { Dashboard } from '../pages/Dashboard';
import Profile from '../pages/Profile';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route isPrivate path="/dashboard" component={Dashboard} />
    <Route isPrivate path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
