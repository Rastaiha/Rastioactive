import { toast } from 'react-toastify';

let isTvClicked = false;
let isSoundPlying = false;

import {
  addToBackground,
} from '../utils';

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil-toolbar.png',
    id: "coil-toolbar",
    x: 500,
    y: 930,
    draggable: true,
    onClick: (e) => {
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet-toolbar.png',
    id: "magnet-toolbar",
    x: 300,
    y: 930,
    draggable: true,
    onClick: (e) => {
      addToBackground(e.target);
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
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
