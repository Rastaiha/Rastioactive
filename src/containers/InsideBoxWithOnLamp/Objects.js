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
    onClick: (e) => {
      window.open("https://www.w3schools.com");
    }
  },

]

export default Objects;
