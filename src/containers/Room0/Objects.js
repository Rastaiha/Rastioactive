import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import ObjectImage from '../Object';

const getAnotherElementById = (element, id) => {
  return element.parent.children.filter((element) => element.attrs.id == id)[0]
}

const showElementSoftly = (element, duration) => {
  let cnt = 0;
  const timer = setInterval(() => {
    element.setOpacity(cnt / 100)
    cnt++;
  }, duration / 100)
  setTimeout(() => {
    clearInterval(timer)
  }, duration)
}

const Objects = [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/red-area.png',
    id: "red-area",
    x: 1758,
    y: 860,
    isHover: false,
    opacity: 0,
    // onClick: (e) => {
    //   console.log(e.target.setX(1000))
    //   // this.isHover = !this.isHover;
    // },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/scan-monitor.png',
    id: "monitor",
    x: 3275,
    y: 650,
    isHover: false,
    opacity: 0,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/tv.png',
    id: "121",
    x: 1930,
    y: 575,
    isHover: false,
    onClick: (e) => {
      const redArea = getAnotherElementById(e.target, "red-area");
      const monitor = getAnotherElementById(e.target, "monitor");
      showElementSoftly(redArea, 2000);
      showElementSoftly(monitor, 1000);
    },
  },

]

export default Objects;
