import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InsideBoxWithOffLamp from '../containers/InsideBoxWithOffLamp';
import InsideBoxWithOnLamp from '../containers/InsideBoxWithOnLamp';
import LampSimulator from '../containers/LampSimulator';
import Room0 from '../containers/Room0';
import Room1 from '../containers/Room1';
import {
  INSIDE_BOX_WITH_OFF_LAMP,
  INSIDE_BOX_WITH_ON_LAMP,
  LAMP_SIMULATE,
  ROOM0_NAME,
  ROOM1_NAME,
} from '../containers/utils';

const Root = () => {
  return (
    <Switch>
      <Route path={`/${INSIDE_BOX_WITH_OFF_LAMP}/`} component={InsideBoxWithOffLamp} />
      <Route path={`/${INSIDE_BOX_WITH_ON_LAMP}/`} component={InsideBoxWithOnLamp} />
      <Route path={`/${LAMP_SIMULATE}/`} component={LampSimulator} />
      <Route path={`/${ROOM1_NAME}/`} component={Room1} />
      <Route path={`/${ROOM0_NAME}/`} component={Room0} />
      <Route path="*" component={Room0} />
    </Switch>
  );
};

export default Root;
