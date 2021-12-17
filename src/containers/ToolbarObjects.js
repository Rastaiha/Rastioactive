import { toast } from 'react-toastify';

import {
  getFromToolbar,
  isItemPicked,
} from './utils';


const toolbarObjects = (state, setState) => [
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/document-toolbar.png',
    id: "document-toolbar",
    x: 85,
    y: 860,
    handyScale: 1,
    // visible: isItemPicked('document'),
    onClick: () => {
      //todo
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/glass-toolbar.png',
    id: "glass-toolbar",
    x: 300,
    y: 860,
    handyScale: 1,
    // visible: isItemPicked('glass'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/book-toolbar.png',
    id: "book-toolbar",
    x: 80,
    y: 940,
    visible: isItemPicked('book'),
    handyScale: 0.4,
    onClick: () => {
      //todo
      toast.info('هر چیز که خار آید، یک روز به کار آيد!');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/scientists-toolbar.png',
    id: "scientists-toolbar",
    x: 350,
    y: 1990,
    visible: isItemPicked('scientists'),
    onClick: (e) => {
      setState({
        ...state,
        showScientistsImage: true,
      })
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/magnet-toolbar.png',
    id: "magnet-toolbar",
    x: 560,
    y: 2000,
    visible: isItemPicked('magnet'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/coil-toolbar.png',
    id: "coil-toolbar",
    x: 750,
    y: 2000,
    visible: isItemPicked('coil'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
]

export default toolbarObjects;