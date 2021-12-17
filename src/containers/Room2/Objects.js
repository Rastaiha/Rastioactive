import { toast } from 'react-toastify';

import toolbarObjects from '../ToolbarObjects';
import {
  addToToolbar,
  INSIDE_BOX_WITH_OFF_LAMP,
  isItemPicked,
  ROOM2_NAME,
} from '../utils';

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/machine-base.png',
    id: "machine-base",
    x: 1020,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece1.png',
    id: "piece1",
    x: 1220,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece2.png',
    id: "piece2",
    x: 1420,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece3.png',
    id: "piece3",
    x: 1420,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece4.png',
    id: "piece4",
    x: 1420,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece5.png',
    id: "piece5",
    x: 1420,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece6.png',
    id: "piece6",
    x: 1020,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/piece7.png',
    id: "piece7",
    x: 1620,
    y: 1068,
    handyScale: 4,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target.getX(), e.target.getY())
    },
  },


  ...toolbarObjects(state, setState),
]

export default Objects;
