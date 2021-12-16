import { toast } from 'react-toastify';

import {
  addToToolbar,
  getAnotherElementById,
  INSIDE_BOX_WITH_OFF_LAMP,
  isItemPicked,
  ROOM2_NAME,
} from '../utils';

console.log(!isItemPicked('book'))

const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/maze-layer.png',
    id: "maze-layer",
    x: 2667,
    y: 626,
    opacity: 0,
    onClick: (e) => {
      setState({
        ...state,
        showMazeImage: true,
      })
      // addToToolbar(e.target)
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/e=-layer.png',
    id: "e=-layer",
    x: 150,
    y: 870,
    opacity: 0,
    onClick: (e) => {
      toast.info('عه! عدسی...');
      setTimeout(() => {
        window.open('https://ophysics.com/l12.html')
      }, 6000);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/closed-door.png',
    id: "closed-door",
    x: 2742,
    y: 1068,
    onClick: (e) => {
      setState({
        ...state,
        showWindowDialog: true,
        windowDoorCallback: (inputPassword) => {
          if (inputPassword == 'ww2') {
            toast.success('ماشالا ماشالا بش بگین، ماشالا!');
            getAnotherElementById(e.target, 'open-door').show();
            e.target.hide();
          }
        },
      })
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/open-door.png',
    id: "open-door",
    x: 3040,
    y: 1060,
    visible: false,
    onClick: (e) => {
      setState({
        ...state,
        showWindowDialog: true,
        windowDoorCallback: () => {

        },
      })
    }
  },
]

export default Objects;
