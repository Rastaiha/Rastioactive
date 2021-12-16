import { toast } from 'react-toastify';

import {
  addToToolbar,
  getAnotherElementById,
  INSIDE_BOX_WITH_OFF_LAMP,
  ROOM1_NAME,
  ROOM2_NAME,
  showElementSoftly
} from '../utils';

let isMagnetPicked = false;
let isCoilPicked = false;
let isScientistsImagePicked = false;

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
    x: 3940,
    y: 690,
    draggable: true,
    onClick: (e) => {
      isMagnetPicked = true;
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
        showKeypadDialog: true,
        keypadCallback: (inputText) => {
          if (inputText == '5274') {
            toast.success('فعلاً، حداحافظ!');
            setTimeout(() => {
              window.location.href = `/${ROOM2_NAME}`;
            }, 6000)
          } else {
            toast.error('منو یاد زیرعسلی ننداز...');
          }
        },
      })
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil.png',
    id: "coil",
    x: 75,
    y: 922,
    draggable: true,
    onClick: (e) => {
      isCoilPicked = true;
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
      if (!isMagnetPicked || !isCoilPicked) {
        toast.error('یکم بیشتر تو اتاق بگرد...');
        return;
      }
      setState({
        ...state,
        showSignsDialog: true,
        signsCallback: (inputText) => {
          if (inputText == '123563') {
            toast.success('بریم ببینیم توی جعبه چه خبره...');
            setTimeout(() => {
              window.location.href = `/${INSIDE_BOX_WITH_OFF_LAMP}`;
            }, 6000)
          } else {
            toast.error('وا نشد :(');
          }
        },
      })
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
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/scientists-toolbar.png',
    id: "scientists-toolbar",
    x: 700,
    y: 2000,
    visible: false,
    onClick: (e) => {
      setState({
        ...state,
        showScientistsImage: true,
      })
    },
  },
]

export default Objects;
