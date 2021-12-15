export const ROOM0_NAME = 'room0';
export const ROOM1_NAME = 'room1';
export const LAMP_SIMULATE = 'lamp_simulation';
export const INSIDE_BOX_WITH_OFF_LAMP = 'off_lamp';
export const INSIDE_BOX_WITH_ON_LAMP = 'on_lamp';

export const getAnotherElementById = (element, id) => {
  return element.parent.children.filter((element) => element.attrs.id == id)[0]
}

export const showElementSoftly = (element, duration) => {
  let cnt = 0;
  const timer = setInterval(() => {
    element.setOpacity(cnt / 100)
    cnt++;
  }, duration / 100)
  setTimeout(() => {
    clearInterval(timer)
  }, duration + 100)
}