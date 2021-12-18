import { toast } from 'react-toastify';

import ToolbarItems from '../ToolbarObjects';

let isTvClicked = false;
let isSoundPlying = false;

import {
  addToBackground,
  areTwoElementsNear,
  getAnotherElementById,
  isItemPicked,
  LAMP_SIMULATE,
} from '../utils';



const onDragEnd = (element) => {
  const coil = getAnotherElementById(element, 'coil');
  const magnet = getAnotherElementById(element, 'magnet');
  if (areTwoElementsNear(coil, magnet)) {
    toast.success('احسنت! بریم ببینیم با آهن‌ربا و سیم‌پیچ چیکار میشه کرد...')
    setTimeout(() => {
      window.location.href = `/${LAMP_SIMULATE}/`;
    }, 6000);
  }
}

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil.png',
    id: "coil",
    x: 123,
    y: 123,
    visible: !isItemPicked('coil'),
    handyScale: 2,
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target)
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet.png',
    id: "magnet",
    x: 456,
    y: 456,
    handyScale: 2,
    visible: !isItemPicked('magnet'),
    draggable: true,
    onDragEnd: (e) => {
      onDragEnd(e.target)
    },
  },
  ...ToolbarItems(state, setState),
]

export default Objects;
