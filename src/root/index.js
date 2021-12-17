import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BuildMachine from '../containers/BuildMachine';
import InsideBoxWithOffLamp from '../containers/InsideBoxWithOffLamp';
import InsideBoxWithOnLamp from '../containers/InsideBoxWithOnLamp';
import LampSimulator from '../containers/LampSimulator';
import Room0 from '../containers/Room0';
import Room1 from '../containers/Room1';
import Room2 from '../containers/Room2';
import Room3 from '../containers/Room3';
import Room4 from '../containers/Room4';
import {
  BUILD_MACHINE,
  INSIDE_BOX_WITH_OFF_LAMP,
  INSIDE_BOX_WITH_ON_LAMP,
  LAMP_SIMULATE,
  ROOM0_NAME,
  ROOM1_NAME,
  ROOM2_NAME,
  ROOM3_NAME,
  ROOM4_NAME,
} from '../containers/utils';

const Root = () => {
  return (
    <Switch>

      <Route path={`/${INSIDE_BOX_WITH_OFF_LAMP}/`} component={InsideBoxWithOffLamp} />
      <Route path={`/${INSIDE_BOX_WITH_ON_LAMP}/`} component={InsideBoxWithOnLamp} />
      <Route path={`/${LAMP_SIMULATE}/`} component={LampSimulator} />
      <Route path={`/${BUILD_MACHINE}/`} component={BuildMachine} />
      <Route path={`/${ROOM4_NAME}/`} component={Room4} />
      <Route path={`/${ROOM3_NAME}/`} component={Room3} />
      <Route path={`/${ROOM2_NAME}/`} component={Room2} />
      <Route path={`/${ROOM1_NAME}/`} component={Room1} />
      <Route path={`/${ROOM0_NAME}/`} component={Room0} />
      <Route path="*" component={Room0} />
    </Switch>
  );
};

export default Root;
