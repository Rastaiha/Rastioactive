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


const Objects = [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/red-area.png',
    id: "red-area",
    x: 1758,
    y: 860,
    isHover: false,
    opacity: 0,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/scan-monitor.png',
    id: "monitor",
    x: 3275,
    y: 650,
    isHover: false,
    opacity: 0,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/tv.png',
    id: "121",
    x: 1930,
    y: 575,
    isHover: false,
    onClick: (e) => {
      if (isTvClicked) return;
      toast.error("هشدار! ماده‌ای رادیو اکتیو خارج از محیط آزمایش یافت شد!")
      isTvClicked = true;
      const redArea = getAnotherElementById(e.target, "red-area");
      const monitor = getAnotherElementById(e.target, "monitor");
      showElementSoftly(redArea, 2000);
      showElementSoftly(monitor, 1000);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/layer-wall.png',
    id: "1821",
    x: 1030,
    y: 575,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
]

export default Objects;
