import { toast } from 'react-toastify';

import {
  addToToolbar,
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
]

export default Objects;
