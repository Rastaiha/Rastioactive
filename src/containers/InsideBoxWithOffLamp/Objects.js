import { toast } from 'react-toastify';

let isTvClicked = false;
let isSoundPlying = false;

const getAnotherElementById = (element, id) => {
  return element.parent.children.filter((element) => element.attrs.id == id)[0]
}

const showElementSoftly = (element, duration) => {
  let cnt = 0;
  const timer = setInterval(() => {
    element.setOpacity(cnt / 100)
    cnt++;
  }, duration / 100)
  setTimeout(() => {
    clearInterval(timer)
  }, duration + 100)
}

function playAudio(url) {
  if (isSoundPlying) return
  isSoundPlying = true;
  const audio = new Audio(url)
  audio.addEventListener('ended', () => { isSoundPlying = false; })
  audio.play();
}


const Objects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/scientists-toolbar.png',
    id: "scientists-toolbar",
    x: 90,
    y: 930,
    // visible: false,
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
    x: 240,
    y: 930,
    // visible: false,
    onClick: (e) => {
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room1/coil-toolbar.png',
    id: "coil-toolbar",
    x: 400,
    y: 930,
    // visible: false,
    onClick: (e) => {
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },
]

export default Objects;
