import { toast } from 'react-toastify';

import toolbarObjects from '../ToolbarObjects';
import {
  addToToolbar,
  BUILD_MACHINE,
  getAnotherElementById,
  INSIDE_BOX_WITH_OFF_LAMP,
  isItemPicked,
  ROOM2_NAME,
  ROOM3_NAME,
} from '../utils';

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/room2-door-layer.png',
    id: "room2-door-layer",
    x: 3583,
    y: 1048,
    opacity: 0,
    onClick: (e) => {
      if (!isItemPicked('glass')) {
        toast.info('از من به تو نصیحت: بیشتر اتاق رو بگرد...')
        return;
      }
      if (isItemPicked('machine')) {
        setState({
          ...state,
          showPasswordDialog: true,
          passwordCallback: (inputPassword) => {
            if (inputPassword == '63') {
              toast.success('شوبخیر!');
              setTimeout(() => {
                window.location.href = `/${ROOM3_NAME}`;
              }, 6000);
            }
          }
        })
      } else {
        toast.info('قفله. نیروی بیشتری وارد کن.')
      }
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/closed-closet.png',
    id: "closed-closet",
    x: 360,
    y: 1108,
    onClick: (e) => {
      getAnotherElementById(e.target, 'open-closet').show();
      getAnotherElementById(e.target, 'green-book').show();
      getAnotherElementById(e.target, 'red-book').show();
      getAnotherElementById(e.target, 'blue-book').show();
      e.target.hide();
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/open-closet.png',
    id: "open-closet",
    x: 343,
    y: 1108,
    visible: false,
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/closed-glass-door.png',
    id: "closed-glass-door",
    x: 1875,
    y: 1150,
    visible: !isItemPicked('document'),
    onClick: (e) => {
      if (isItemPicked('document')) return;
      getAnotherElementById(e.target, 'open-glass-door-left').show();
      getAnotherElementById(e.target, 'open-glass-door-right').show();
      e.target.hide();
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/closed-glass-door-after.png',
    id: "closed-glass-door-after",
    x: 1875,
    y: 1150,
    visible: isItemPicked('document'),
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/glass.png',
    id: "glass",
    x: 2148,
    y: 848,
    visible: isItemPicked('document') && !isItemPicked('glass'),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
      addToToolbar(e.target);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/open-glass-door-left.png',
    id: "open-glass-door-left",
    x: 1210,
    y: 1145,
    visible: false,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/open-glass-door-right.png',
    id: "open-glass-door-right",
    x: 2500,
    y: 1150,
    visible: false,
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/document.png',
    id: "document",
    x: 2250,
    y: 962,
    visible: !isItemPicked('document'),
    onClick: (e) => {
      toast.success('احسنت! چیز به‌درد‌بخوری پیدا کردی.');
      addToToolbar(e.target);
      getAnotherElementById(e.target, 'open-glass-door-left').hide();
      getAnotherElementById(e.target, 'open-glass-door-right').hide();
      getAnotherElementById(e.target, 'closed-glass-door-after').show();
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/machine-pieces.png',
    id: "machine-pieces",
    x: 2900,
    y: 942,
    visible: !isItemPicked('machine'),
    onClick: (e) => {
      toast.info('به سوی سرهم‌کردن قطعات...');
      setTimeout(() => {
        window.location.href = `/${BUILD_MACHINE}`;
      }, 6000);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/complete-machine.png',
    id: "complete-machine",
    x: 2915,
    y: 1140,
    visible: isItemPicked('machine'),
  },


  ...books(state, setState),
  ...toolbarObjects(state, setState),
]

const books = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/green-book.png',
    id: "green-book",
    x: 327,
    y: 1068,
    handyScale: 3,
    visible: false,
    onClick: (e) => {
      toast.success("green")
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/blue-book.png',
    id: "blue-book",
    x: 328,
    y: 1010,
    handyScale: 3,
    visible: false,
    onClick: (e) => {
      toast.success("blue")
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room2/red-book.png',
    id: "red-book",
    x: 320,
    y: 958,
    handyScale: 3,
    visible: false,
    onClick: (e) => {
      toast.success("red")
    }
  },
]

export default Objects;
