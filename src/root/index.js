import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LampSimulator from '../containers/LampSimulator';
import Room0 from '../containers/Room0';
import Room1 from '../containers/Room1';


const Root = () => {
  return (
    <Switch>
      <Route path="/lamp/" component={LampSimulator} />
      <Route path="/room1/" component={Room1} />
      <Route path="/room0/" component={Room0} />
      <Route path="*" component={Room0} />
    </Switch>
  );
};

export default Root;
