import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Room0 from '../containers/Room0';


const Root = () => {
  return (
    <Switch>
      <Route path="/room0/" component={Room0} />
    </Switch>
  );
};

export default Root;
