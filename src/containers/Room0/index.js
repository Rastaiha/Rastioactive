import React from 'react';

import Scene from '../Scene';
import Objects from './Objects';

const Index = () => {
  return (
    <Scene backgroundImageLink={'/Room0/background.png'} objects={Objects} />
  );
};


export default Index;
