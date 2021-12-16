import { toast } from 'react-toastify';

let isTvClicked = false;
let isSoundPlying = false;

import {
  LAMP_SIMULATE,
  addToBackground,
  getAnotherElementById,
} from '../utils';


const onDragEnd = (element) => {
  const coil = getAnotherElementById(element, 'coil');
  const magnet = getAnotherElementById(element, 'magnet');
  if (Math.abs(coil.getX() - magnet.getX()) < 50 && Math.abs(coil.getY() - magnet.getY()) < 50) {
    toast.success('بریم ببینیم با آهن‌ربا و سیم‌پیچ چیکار میشه کرد...')
    setTimeout(() => {
      window.location.href = `/${LAMP_SIMULATE}`;
    }, 6000);
  }
}

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil-toolbar.png',
    id: "coil",
    x: 500,
    y: 930,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target)
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet-toolbar.png',
    id: "magnet",
    x: 300,
    y: 930,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target)
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/scientists.png',
    id: "scientists-toolbar",
    x: 700,
    y: 930,
    onClick: (e) => {
      setState({
        ...state,
        showScientists: true,
      })
    },
  },
]

export default Objects;
