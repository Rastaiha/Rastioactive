import { toast } from 'react-toastify';

let isTvClicked = false;
let isSoundPlying = false;

import {
  LAMP_SIMULATE,
  addToBackground,
  getAnotherElementById,
  isElementNearPoint,
} from '../utils';


const onDragEnd = (element) => {
  console.log(element.getX(), ' --- ', element.getY())
  let points = [
    {}, {},
    {
      x: 774,
      y: 448,
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
    console.log(piece.getX(), ' -- ', piece.getY(), ' --- ', points[i])
    if (!isElementNearPoint(piece, points[i])) {
      return;
    }
  }
  toast.success('بریم ببینیم با آهن‌ربا و سیم‌پیچ چیکار میشه کرد...');
  setTimeout(() => {
    window.location.href = `/${LAMP_SIMULATE}`;
  }, 6000);

  // const coil = getAnotherElementById(element, 'coil');
  // const magnet = getAnotherElementById(element, 'magnet');
  // if (Math.abs(coil.getX() - magnet.getX()) < 50 && Math.abs(coil.getY() - magnet.getY()) < 50) {
  //   toast.success('بریم ببینیم با آهن‌ربا و سیم‌پیچ چیکار میشه کرد...')
  //   setTimeout(() => {
  //     window.location.href = `/${LAMP_SIMULATE}`;
  //   }, 6000);
  // }
}

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece1.png',
    id: "piece1",
    x: 2000,
    y: 1108,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece2.png',
    id: "piece2",
    x: 860,
    y: 508,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece3.png',
    id: "piece3",
    x: 3000,
    y: 1808,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece4.png',
    id: "piece4",
    x: 2060,
    y: 308,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece5.png',
    id: "piece5",
    x: 1260,
    y: 1808,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece7.png',
    id: "piece7",
    x: 560,
    y: 1308,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/BuildMachine/piece6.png',
    id: "piece6",
    x: 3500,
    y: 808,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target);
    }
  },
]

export default Objects;
