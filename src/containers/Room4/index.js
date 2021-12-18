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
        backgroundImageLink={'/Room4/background.png'}
        objects={Objects(state, setState)} />
      <Image
        image={'/Room1/scientists-big.png'}
        open={state?.showScientistsImage}
        handleClose={() => { setState({ ...state, showScientistsImage: !state.showScientistsImage }) }}
        text={'Manhattan Project Scientists - 1944'}
      />
      <Image
        image={'/Room1/paper.png'}
        open={state?.showPaperDialog}
        handleClose={() => { setState({ ...state, showPaperDialog: !state.showPaperDialog }) }}
      />
      <Password
        open={state?.showGateDialog}
        handleClose={() => { setState({ ...state, showGateDialog: !state.showGateDialog }) }}
        callbackFunction={state?.callback}
        image={'/Room4/Unknown.jpg'}
      />
      <Video
        image={'/Room4/win.MP4'}
        open={state?.showWinVideo}
        handleClose={() => { }}
      />
      <Video
        image={'/Room4/loose.MP4'}
        open={state?.showLooseVideo}
        handleClose={() => { }}
      />
    </>
  );
};


export default Index;
