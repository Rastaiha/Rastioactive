import React from 'react';

import Video from '../../components/Dialog/Video';
import Scene from '../Scene';
import Objects from './Objects';

const BuildMachine = () => {
  const [state, setState] = React.useState();

  return (
    <>
      <Scene backgroundImageLink={'/BuildMachine/background.jpeg'} objects={Objects(state, setState)} />
      <Video
        image={'/BuildMachine/geer.mp4'}
        open={state?.showMachineVideo}
      />
    </>
  );
};

export default BuildMachine;
