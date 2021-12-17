import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import Image from '../../components/Dialog/Image';
import Password from '../../components/Dialog/Password';
import Scene from '../Scene';
import Objects from './Objects';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState();

  return (
    <>
      <Scene
        showScientistsDialog
        backgroundImageLink={'/Room2/background.png'}
        objects={Objects(state, setState)} />
      <Image
        image={'/Room1/scientists-big.png'}
        open={state?.showScientistsImage}
        handleClose={() => { setState({ ...state, showScientistsImage: !state.showScientistsImage }) }}
        text={'Manhattan Project Scientists - 1944'}
      />
      <Password
        open={state?.showKeypadDialog}
        image={'/Room1/keypad-big.png'}
        handleClose={() => { setState({ ...state, showKeypadDialog: !state.showKeypadDialog }) }}
        callbackFunction={state?.keypadCallback}
      />
      <Password
        open={state?.showSignsDialog}
        image={'/Room1/3signs-big.png'}
        handleClose={() => { setState({ ...state, showSignsDialog: !state.showSignsDialog }) }}
        callbackFunction={state?.signsCallback}
      />
    </>
  );
};


export default Index;
