import { toast } from 'react-toastify';

let isTvClicked = false;
let isSoundPlying = false;

import {
  addToBackground,
  getAnotherElementById,
  isElementNearPoint,
  LAMP_SIMULATE,
  ROOM2_NAME,
} from '../utils';


const onDragEnd = (element, state, setState) => {
  console.log(element.getX(), ' --- ', element.getY())
  let points = [
    {}, {},
    {
      x: 754,
      y: 428,
    },
    {
      x: 666,
      y: 545
    },
    {
      x: 804,
      y: 479,
    },
    {
      x: 908,
      y: 542,
    },
    {
      x: 1067,
      y: 466,
    },
    {
      x: 1179,
      y: 446,
    }
  ];
  for (let i = 2; i <= 7; i++) {
    const piece = getAnotherElementById(element, `piece${i}`);
    if (!isElementNearPoint(piece, points[i])) {
      return;
    }
  }
  localStorage.setItem('machine', '1');
  toast.success('احسنت! حالا نیرومند شدی...')

  setTimeout(() => {
    setState({
      ...state,
      showMachineVideo: true,
    })
  }, 6000);

  setTimeout(() => {
    window.location.href = `/${ROOM2_NAME}`;
  }, 20000);
}

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece1.png',
    id: "piece1",
    x: 2000,
    y: 1108,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece2.png',
    id: "piece2",
    x: 860,
    y: 508,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece3.png',
    id: "piece3",
    x: 3000,
    y: 1808,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece4.png',
    id: "piece4",
    x: 2060,
    y: 308,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece5.png',
    id: "piece5",
    x: 1260,
    y: 1808,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece7.png',
    id: "piece7",
    x: 560,
    y: 1308,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece6.png',
    id: "piece6",
    x: 3500,
    y: 808,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target, state, setState);
    }
  },
]

export default Objects;
