import { toast } from 'react-toastify';

import {
  addToToolbar,
  INSIDE_BOX_WITH_OFF_LAMP,
  isItemPicked,
  ROOM2_NAME,
} from '../utils';


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
    imageUrl: process.env.PUBLIC_URL + '/Room1/book.png',
    id: "book",
    x: 340,
    y: 690,
    draggable: true,
    visible: !isItemPicked("book"),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
      addToToolbar(e.target)
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet.png',
    id: "magnet",
    x: 3940,
    y: 690,
    draggable: true,
    visible: !isItemPicked("magnet"),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
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
            toast.error('زیرعسلی :(');
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
    visible: !isItemPicked("coil"),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
      addToToolbar(e.target)
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/scientists.png',
    id: "scientists",
    x: 730,
    y: 1150,
    visible: !isItemPicked('scientists'),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
      addToToolbar(e.target)
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/3signs.png',
    id: "3signs",
    x: 3800,
    y: 1396,
    onClick: (e) => {
      if (!isItemPicked('magnet') || !isItemPicked('coil')) {
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

]

const points = [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/point.png',
    id: "pint31",
    x: 700,
    y: 2000,
    visible: false,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/point.png',
    id: "pint31",
    x: 1000,
    y: 2000,
    visible: false,
  },
]

export default Objects;
