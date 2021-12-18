import { toast } from 'react-toastify';

import toolbarObjects from '../ToolbarObjects';
import {
  addToToolbar,
  areTwoElementsNear,
  getAnotherElementById,
  INSIDE_BOX_WITH_OFF_LAMP,
  isItemPicked,
  ROOM1_NAME,
  ROOM2_NAME,
} from '../utils';
let arePiecesInRightPlace = false;

const onDragEnd = (e) => {
  if (arePiecesInRightPlace) return;
  const point1 = getAnotherElementById(e.target, "point1");
  const point2 = getAnotherElementById(e.target, "point2");
  const compressor = getAnotherElementById(e.target, "compressor")
  const condenser = getAnotherElementById(e.target, "condenser");
  console.log("@@@@@@@")
  if (areTwoElementsNear(point1, compressor) && areTwoElementsNear(point2, condenser)) {
    arePiecesInRightPlace = true;
    toast.success('خره وا شد!');
    setTimeout(() => {
      toast.info('کلمه‌ی «خره» در گویش اصفهانی، معنای مثبتی دارد و جهت خطاب‌کردن دوستان استفاده می‌شود!');
    }, 3000)
    getAnotherElementById(e.target, "dariche-long").hide();
    getAnotherElementById(e.target, "dariche-short").show();
  }

}

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/door-layer.png',
    id: "door-layer",
    x: 1230,
    y: 1070,
    opacity: 0,
    onClick: (e) => {
      if (isItemPicked('paper')) {
        toast.info('دادا ما رفتیم اتاقی یک...');
        setTimeout(() => {
          window.location.href = `/${ROOM1_NAME}`;
        }, 6000)
      } else {
        toast.info('یُخته بیشتر بگرد!');
        setTimeout(() => {
          toast.info('کلمه‌ی «یُخته» در گویش اصفهانی به معنی «یک‌ذره» است.')
        }, 3000)
      }
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/dariche-long.png',
    id: "dariche-long",
    x: 1220,
    y: 1810,
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/dariche-short.png',
    id: "dariche-short",
    x: 1220,
    y: 1810,
    visible: false,
    onClick: (e) => {
      toast.info('برو کنار موشکی نشی...');
      setTimeout(() => {
        toast.info('سه')
      }, 4000);
      setTimeout(() => {
        toast.info('دو')
      }, 6000);
      setTimeout(() => {
        toast.info('یک')
      }, 8000);
      setTimeout(() => {
        getAnotherElementById(e.target, "bomb-closed").show();
        getAnotherElementById(e.target, "dariche-short").hide()
        getAnotherElementById(e.target, "compressor").hide()
        getAnotherElementById(e.target, "condenser").hide()
      }, 10000);
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/bomb-closed.png',
    id: "bomb-closed",
    x: 2196,
    y: 1670,
    visible: false,
    onClick: (e) => {
      toast.info('یعنی تو جعبه چی می‌تونه باشه؟')
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/compressor.png',
    id: "compressor",
    x: 3920,
    y: 1780,
    draggable: true,
    onDragEnd,
    onClick: () => {
      toast.info('این یک جاروبرقی نیست!');
    }
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/condenser.png',
    id: "condenser",
    x: 1820,
    y: 1330,
    draggable: true,
    onDragEnd,
    onClick: () => {
      toast.info('اگه سرحـــــالم، اگه شــــــادم واسه اینه که...');
    }
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/paper.png',
    id: "paper",
    x: 3280,
    y: 790,
    handyScale: 0.3,
    visible: !isItemPicked('paper'),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
      addToToolbar(e.target);
    },
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/random-rectangle.png',
    id: "random-rectangle",
    x: 1660,
    y: 1570,
    draggable: true,
    onClick: (e) => {
      setState({
        ...state,
        showGateDialog: true,
        callback: (inputPassword) => {
          if (inputPassword == 'HECR') {
            const a = 2;
          } else if (inputPassword == 'UFSS') {
            const a = 2;
          } else {
            toast.info('بمب‌س، خطرناکه. دست نزِن.')
          }
        }
      })
    }
  },

  ...toolbarObjects(state, setState),
  ...points,
]

const points = [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/point.png',
    id: "point1",
    x: 2130,
    y: 1650,
    visible: false,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/point.png',
    id: "point2",
    x: 1875,
    y: 1980,
    visible: false,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room4/point.png',
    id: "point3",
    x: 1657,
    y: 1570,
    visible: false,
  },
]

export default Objects;