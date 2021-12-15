import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import ObjectImage from '../Object';


const Objects = [
  {
    imageUrl: process.env.PUBLIC_URL + '/security_room/satl.png',
    id: 1,
    x: 605,
    y: 1425,
    isHover: false,
    onClick: () => {
      // setOpenDialog2(true);
    },
  }
]

export default Objects;
