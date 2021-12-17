import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import Image from '../../components/Dialog/Image';
import Password from '../../components/Dialog/Password';
import Video from '../../components/Dialog/Video';
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
        open={state?.showPasswordDialog}
        handleClose={() => { setState({ ...state, showPasswordDialog: !state.showPasswordDialog }) }}
        callbackFunction={state?.passwordCallback}
      />
      <Video
        image={'/Room2/cradle.mp4'}
        open={state?.showCradleVideo}
        handleClose={() => { setState({ ...state, showCradleVideo: !state.showCradleVideo }) }}
      />
    </>
  );
};


export default Index;
