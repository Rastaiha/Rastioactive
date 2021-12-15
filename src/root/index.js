import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Room0 from '../containers/Room0';
import Room1 from '../containers/Room1';


const Root = () => {
  return (
    <Switch>
      <Route path="/room1/" component={Room1} />
      <Route path="/room0/" component={Room0} />
      <Route path="*" component={Room0} />
    </Switch>
  );
};

export default Root;
