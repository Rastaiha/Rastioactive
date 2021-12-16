import React from 'react'
import ObjectImage from './Object';
import { allObjects } from './AllObjects';

export const ROOM0_NAME = 'room0';
export const ROOM1_NAME = 'room1';
export const LAMP_SIMULATE = 'lamp_simulation';
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

export const addToToolbar = (element) => {
  const id = element.attrs.id;
  const toolbarElement = getAnotherElementById(element, id + '-toolbar')
  toolbarElement.show()
  const toolbarLayer = element.parent.parent.children.filter((layer) => layer.attrs.id == 'toolbar')[0]
  element.hide()
  console.log(element)
  console.log(toolbarLayer)
  toolbarLayer.add(toolbarElement);
}