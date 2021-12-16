import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import Scene from '../Scene';
import Objects from './Objects';
import Image from '../../components/Dialog/Image';
import Password from '../../components/Dialog/Password';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState();

  console.log("@@@@")

  return (
    <>
      <Scene
        showScientistsDialog
        backgroundImageLink={'/Room1/background.png'}
        objects={Objects(state, setState)} />
      <Image
        image={'/Room1/scientists-big.png'}
        open={state?.showScientists}
        handleClose={() => { setState({ ...state, showScientists: !state.showScientists }) }}
      />
      <Password
        open={state?.showKeypad}
        image={'/Room1/keypad-big.png'}
        handleClose={() => { setState({ ...state, showKeypad: !state.showKeypad }) }}
        callbackFunction={state?.keypadCallback}
      />
    </>
  );
};


export default Index;
