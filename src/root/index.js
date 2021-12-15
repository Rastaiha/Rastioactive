import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LampSimulator from '../containers/LampSimulator';
import Room0 from '../containers/Room0';
import Room1 from '../containers/Room1';
import {
  LAMP_SIMULATE,
  ROOM0_NAME,
  ROOM1_NAME,
} from '../containers/utils';

const Root = () => {
  return (
    <Switch>
      <Route path={`/${LAMP_SIMULATE}/`} component={LampSimulator} />
      <Route path={`/${ROOM1_NAME}/`} component={Room1} />
      <Route path={`/${ROOM0_NAME}/`} component={Room0} />
      <Route path="*" component={Room0} />
    </Switch>
  );
};

export default Root;
