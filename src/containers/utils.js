import { toast } from "react-toastify";

export const ROOM0_NAME = 'ro0oo0O0m0';
export const ROOM1_NAME = 'r0o0oo0Om1';
export const ROOM2_NAME = 'r000oOoOm2';
export const ROOM3_NAME = 'rOo0O0o0m3';
export const ROOM4_NAME = 'ro0oOo0om4';
export const LAMP_SIMULATE = 'lamp_simulation';
export const BUILD_MACHINE = 'build_machine';
export const INSIDE_BOX_WITH_OFF_LAMP = 'off_lamp';
export const INSIDE_BOX_WITH_ON_LAMP = 'on_lamp';

export const getAnotherElementById = (element, id) => {
  let desired_element;
  for (const layer of element.parent.parent.children) {
    desired_element = layer.children.filter((element) => element.attrs.id == id)[0]
    if (desired_element) break;
  }
  return desired_element;
}

export const areTwoElementsNear = (elem1, elem2) => {
  if (Math.abs(elem1.getX() - elem2.getX()) < 80 && Math.abs(elem1.getY() - elem2.getY()) < 80) {
    return true;
  }
  return false;
}

export const isElementNearPoint = (elem, point) => {
  if (Math.abs(elem.getX() - point.x) < 80 && Math.abs(elem.getY() - point.y) < 80) {
    return true;
  }
  return false;
}

export const updateLayers = (element) => {
  return element.parent.parent.children.forEach(layer => {
    layer.draw();
  });
}

export const showElementSoftly = (element, duration) => {
  let cnt = 0;
  const timer = setInterval(() => {
    element.setOpacity(cnt / 100)
    cnt += 5;
  }, duration / 60)
  setTimeout(() => {
    clearInterval(timer)
  }, duration)
}

export const addToToolbar = (element) => {
  const id = element.attrs.id;
  const toolbarElement = getAnotherElementById(element, id + '-toolbar')
  if (!toolbarElement) {
    toast.info('ولش کن، به درد نمی‌خوره.');
    return;
  }
  localStorage.setItem(id, '1');
  toolbarElement.show()
  element.hide();
}

export const getFromToolbar = (element) => {
  let id = element.attrs.id;
  id = id.substring(0, id.length - 8);
  const backgroundElement = getAnotherElementById(element, id)
  if (!backgroundElement) {
    toast.info('ولش کن، به درد نمی‌خوره.');
    return;
  }
  localStorage.setItem(id, '0');
  backgroundElement.show()
  element.hide();
}

export const isItemPicked = (id) => {
  const status = localStorage.getItem(id);
  if (status == '1') {
    return true;
  }
  if (status == '0' || status == null) {
    return false;
  }
}

export const putInLocalStorage = (id) => {
  localStorage.setItem(id, '1');
}

