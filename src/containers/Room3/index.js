import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Image from '../../components/Dialog/Image';
import Password from '../../components/Dialog/Password';
import Scene from '../Scene';
import Objects from './Objects';

const useStyles = makeStyles(() => ({
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState();

  return (
    <>
      <Scene
        showScientistsDialog
        backgroundImageLink={'/Room3/background.png'}
        objects={Objects(state, setState)} />
      <Image
        image={'/Room3/maze.png'}
        open={state?.showMazeImage}
        handleClose={() => { setState({ ...state, showMazeImage: !state.showMazeImage }) }}
      />
      <Password
        open={state?.showWindowDialog}
        handleClose={() => { setState({ ...state, showWindowDialog: !state.showWindowDialog }) }}
        callbackFunction={state?.windowDoorCallback}
      />
    </>
  );
};


export default Index;
