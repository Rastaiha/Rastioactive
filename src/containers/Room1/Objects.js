import { toast } from 'react-toastify';

import toolbarObjects from '../ToolbarObjects';
import {
  addToToolbar,
  INSIDE_BOX_WITH_OFF_LAMP,
  isItemPicked,
  ROOM2_NAME,
  ROOM4_NAME,
} from '../utils';

function playAudio(url) {
  const audio = new Audio(url)
  audio.play();
}



const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/touring-machine-layer.png',
    id: "touring-machine-layer",
    x: 2580,
    y: 1170,
    opacity: 0,
    onClick: (e) => {
      if (isItemPicked('paper')) {
        toast.success('داره کار می‌کنه...');
        playAudio(process.env.PUBLIC_URL + '/Room1/touring-machine.mp3')
        setTimeout(() => {
          window.open('https://cryptii.com/pipes/enigma-machine');
        }, 7000)
      } else {
        toast.info('کار نمی‌کنه.');
      }
    },
  },

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
      if (isItemPicked('paper')) {
        toast.info('راه بازگشتی در کار هست!');
        setTimeout(() => {
          window.location.href = `/${ROOM4_NAME}`;
          return;
        }, 6000);
      } else {
        toast.info('احتمالاً احتمالاً‌ راه بازگشتی در کار نیست!');
      }
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/book.png',
    id: "book",
    x: 4010,
    y: 1920,
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
      if (isItemPicked('paper')) {
        toast.error('صد دفعه به این مسئول آزمایشگامون گفتم جنس بنجل نگیره. بیا، خراب شده!');
        return;
      }
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
      addToToolbar(e.target);
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


  ...toolbarObjects(state, setState),
]



export default Objects;
