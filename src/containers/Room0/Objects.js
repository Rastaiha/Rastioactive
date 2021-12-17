import { toast } from 'react-toastify';

import {
  getAnotherElementById,
  ROOM1_NAME,
  showElementSoftly,
} from '../utils';

let isTvClicked = false;
let isSoundPlying = false;
let isFakeDoorKnocked = false;

function playAudio(url) {
  if (isSoundPlying || !isTvClicked) return
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
    visible: false,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/scan-monitor.png',
    id: "monitor",
    x: 3275,
    y: 650,
    visible: false,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/tv.png',
    id: "tv",
    x: 1930,
    y: 575,
    onClick: (e) => {
      if (isTvClicked) return;
      toast.error("هشدار! ماده‌ای رادیو اکتیو خارج از محیط آزمایش یافت شد!")
      isTvClicked = true;
      const redArea = getAnotherElementById(e.target, "red-area");
      const monitor = getAnotherElementById(e.target, "monitor");
      playAudio(process.env.PUBLIC_URL + '/Room0/scan.mp3');
      redArea.show();
      monitor.show();
      // showElementSoftly(redArea, 2000);
      // showElementSoftly(monitor, 1000);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall1",
    x: 645,
    y: 850,
    visible: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall2",
    x: 970,
    y: 850,
    opacity: 0,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall3",
    x: 1290,
    y: 850,
    opacity: 0,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall4",
    x: 1614,
    y: 850,
    opacity: 0,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall5",
    x: 2255,
    y: 850,
    opacity: 0,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall6",
    x: 2576,
    y: 850,
    opacity: 0,
    onClick: (e) => {
      if (isSoundPlying || !isTvClicked) return;
      if (!isFakeDoorKnocked) {
        isFakeDoorKnocked = true;
        playAudio(process.env.PUBLIC_URL + '/Room0/bang2.mp3');
      } else {
        toast.info("اوه! بذار ببینم پشت اینجا چیه...");
        playAudio(process.env.PUBLIC_URL + '/Room0/bang2.mp3');
        setTimeout(() => {
          window.location.href = `/${ROOM1_NAME}`;
        }, 6000)
      }
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall7",
    x: 2898,
    y: 850,
    opacity: 0,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
]

export default Objects;
