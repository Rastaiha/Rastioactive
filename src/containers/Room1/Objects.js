import { toast } from 'react-toastify';

import { getAnotherElementById, ROOM1_NAME, showElementSoftly } from '../utils';

let isTvClicked = false;
let isSoundPlying = false;

function playAudio(url) {
  if (isSoundPlying) return
  isSoundPlying = true;
  const audio = new Audio(url)
  audio.addEventListener('ended', () => { isSoundPlying = false; })
  audio.play();
}


const Objects = [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/magnet.png',
    id: "magnet",
    x: 1758,
    y: 860,
    draggable: true,
    onDragEnd: (e) => {
      console.log(e.target)
    }
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/keypad.png',
    id: "keypad",
    x: 220,
    y: 1250,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil.png',
    id: "coil",
    x: 3275,
    y: 650,
    draggable: true,

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
      // open a dialog and show clearer image
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/door-layer.png',
    id: "door-layer",
    x: 1235,
    y: 1205,
    onClick: (e) => {
      toast.info('احتمالاً احتمالاً‌ راه بازگشتی در کار نیست!')
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/box-layer.png',
    id: "box-layer",
    x: 3920,
    y: 1268,
    onClick: (e) => {
      toast.info('یعنی تو جعبه چی می‌تونه باشه؟')
    },
  },
]

export default Objects;
