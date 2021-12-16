import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import Scene from '../Scene';
import Objects from './Objects';
import Message from '../../components/Dialog/Message';

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
      <Message
        open={state?.showScientists}
        handleClose={() => { setState({ ...state, showScientists: !state.showScientists }) }}
      />
    </>
  );
};


export default Index;
