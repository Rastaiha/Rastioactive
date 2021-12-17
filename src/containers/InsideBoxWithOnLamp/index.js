import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import { toast } from 'react-toastify';
import Video from '../../components/Dialog/Video';
import Scene from '../Scene';
import Objects from './Objects';
import {
  ROOM1_NAME,
} from '../utils';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState();

  React.useEffect(() => {
    toast.info('آیا می‌دانید نور با برخورد به پره‌های الکترومتر، آن را به حرکت درمی‌آورد؟')
    setTimeout(() => {
      setState({
        showPhotometerVideo: true,
      })
    }, 8000);

    setTimeout(() => {
      toast.info('پیشنهاد می‌کنم یک بار دیگه هم فیلم رو ببینی! عجله کن، ۱۱ ثانیه‌ی دیگه از جعبه خارج میشیم');
    }, 21000);

    setTimeout(() => {
      window.location.href = `/${ROOM1_NAME}`;
    }, 33000);
  }, [])

  return (
    <>
      <Scene backgroundImageLink={'/Room1/on-lamp-background.png'} objects={Objects(state, setState)} />
      <Video
        image={'/Room1/photometer.mp4'}
        open={state?.showPhotometerVideo}
      />
    </>
  );
};


export default Index;
