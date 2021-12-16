import { toast } from 'react-toastify';

import {
  addToToolbar,
  getAnotherElementById,
  ROOM1_NAME,
  showElementSoftly
} from '../utils';

let isTvClicked = false;
let isSoundPlying = false;

function playAudio(url) {
  if (isSoundPlying) return
  isSoundPlying = true;
  const audio = new Audio(url)
  audio.addEventListener('ended', () => { isSoundPlying = false; })
  audio.play();
}

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/box-layer.png',
    id: "box-layer",
    x: 3920,
    y: 1268,
    opacity: 0,
    onClick: (e) => {
      toast.info('یعنی تو جعبه چی می‌تونه باشه؟')
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/door-layer.png',
    id: "door-layer",
    x: 1235,
    y: 1205,
    opacity: 0,
    onClick: (e) => {
      toast.info('احتمالاً احتمالاً‌ راه بازگشتی در کار نیست!')
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet.png',
    id: "magnet",
    x: 1758,
    y: 860,
    draggable: true,
    onClick: (e) => {
      toast.success('احسنت! چیز به درد بخوری پیدا کردی.');
      addToToolbar(e.target)
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/keypad.png',
    id: "keypad",
    x: 220,
    y: 1250,
    onClick: () => {
      setState({
        ...state,
        showKeypad: true,
        keypadCallback: (inputText) => {
          toast.success(inputText)
        },
      })
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil.png',
    id: "coil",
    x: 75,
    y: 650,
    draggable: true,
    onClick: (e) => {
      toast.success('احسنت! چیز به درد بخوری پیدا کردی.');
      addToToolbar(e.target)
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/3signs.png',
    id: "3signs",
    x: 3800,
    y: 1396,
    onClick: (e) => {
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/scientists.png',
    id: "scientists",
    x: 730,
    y: 1150,
    onClick: (e) => {
      toast.success('احسنت! چیز به درد بخوری پیدا کردی.');
      addToToolbar(e.target)
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/scientists-toolbar.png',
    id: "scientists-toolbar",
    x: 100,
    y: 2000,
    visible: false,
    onClick: (e) => {
      setState({
        ...state,
        showScientists: true,
      })
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet-toolbar.png',
    id: "magnet-toolbar",
    x: 300,
    y: 2000,
    visible: false,
    onClick: (e) => {
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil-toolbar.png',
    id: "coil-toolbar",
    x: 500,
    y: 2000,
    visible: false,
    onClick: (e) => {
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },

]

export default Objects;
