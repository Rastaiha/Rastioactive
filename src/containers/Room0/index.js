/* eslint-disable react/display-name */
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

const height = window.innerHeight - 100;

import Objects from './Objects';
import Scene from '../Scene';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Scene objects={Objects} />
  );
};


export default Index;
