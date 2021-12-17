import { toast } from 'react-toastify';

import toolbarObjects from '../ToolbarObjects';
import {
  addToToolbar,
  areTwoElementsNear,
  getAnotherElementById,
  isElementNearPoint,
  isItemPicked,
  ROOM1_NAME,
  ROOM4_NAME,
  showElementSoftly,
} from '../utils';

let isWW2Clear = false;
let areAdasisPlacedInCorrectPlaces = false;

const checkPlaceAdasisInCorrectPlaces = (e) => {
  if (areAdasisPlacedInCorrectPlaces) return;
  const adasi1 = getAnotherElementById(e.target, 'adasi-amoodi1');
  const adasi2 = getAnotherElementById(e.target, 'adasi-amoodi2');
  const firstPoint = { x: 811, y: 573 };
  const secondPoint = { x: 415, y: 567 };
  if ((isElementNearPoint(adasi1, firstPoint) && isElementNearPoint(adasi2, secondPoint)) ||
    (isElementNearPoint(adasi1, secondPoint) && isElementNearPoint(adasi2, firstPoint))) {
    toast.success('بزن زنگو!');
    areAdasisPlacedInCorrectPlaces = true;
    const laserObject = getAnotherElementById(e.target, "laser");
    laserObject.show();
    showElementSoftly(laserObject, 2000);
    setTimeout(() => {
      window.location.href = `/${ROOM1_NAME}`;
    }, 6000);
  }

}

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
    imageUrl: process.env.PUBLIC_URL + '/Room3/ww2.png',
    id: "ww2",
    x: 3300,
    y: 900,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/ww2-vivid.png',
    id: "ww2-vivid",
    x: 3298,
    y: 895,
    visible: false,
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/adasi-amoodi.png',
    id: "adasi-amoodi1",
    x: 2780,
    y: 1163,
    draggable: true,
    onDragEnd: (e) => {
      checkPlaceAdasisInCorrectPlaces(e);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/adasi-amoodi.png',
    id: "adasi-amoodi2",
    x: 2870,
    y: 1162,
    draggable: true,
    onDragEnd: (e) => {
      checkPlaceAdasisInCorrectPlaces(e);
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/adasi-ofoghi.png',
    id: "adasi-ofoghi",
    x: 2648,
    y: 1132,
    draggable: true,
    onClick: (e) => {
    }
  },

  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/laser.png',
    id: "laser",
    x: 890,
    y: 893,
    opacity: 0,
    visible: false,
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
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room3/glass.png',
    id: 'glass',
    x: 1000,
    y: 1000,
    draggable: true,
    visible: !isItemPicked('glass'),
    onClick: (e) => {
      addToToolbar(e.target);
    },
    onDragEnd: (e) => {
      if (isWW2Clear) return;
      const ww2 = getAnotherElementById(e.target, 'ww2');
      const glass = e.target;
      const ww2_vivid = getAnotherElementById(e.target, "ww2-vivid");
      if (areTwoElementsNear(ww2, glass)) {
        isWW2Clear = true;
        // showElementSoftly(ww2_vivid, 1000);
        ww2_vivid.show();
        toast.success('های هیتلر!')
      }
    }
  },
  ...toolbarObjects(state, setState),
]

export default Objects;
