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
    visible: isItemPicked('document'),
    onClick: () => {
      window.open('https://github.com/Rastaiha/upload_center/raw/main/%D9%BE%D8%B1%D9%88%D9%86%D8%AF%D9%87.pdf');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/glass-toolbar.png',
    id: "glass-toolbar",
    x: 300,
    y: 860,
    handyScale: 1,
    visible: isItemPicked('glass'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/book-toolbar.png',
    id: "book-toolbar",
    x: 80,
    y: 945,
    visible: isItemPicked('book'),
    handyScale: 0.4,
    onClick: () => {
      window.open('https://github.com/Rastaiha/upload_center/raw/main/%D8%AF%D9%81%D8%AA%D8%B1%DA%86%D9%87.pdf')
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/scientists-toolbar.png',
    id: "scientists-toolbar",
    x: 210,
    y: 940,
    handyScale: 0.6,
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
    x: 330,
    y: 940,
    handyScale: 0.6,
    visible: isItemPicked('magnet'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/coil-toolbar.png',
    id: "coil-toolbar",
    x: 450,
    y: 940,
    handyScale: 0.6,
    visible: isItemPicked('coil'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Toolbar/paper.png',
    id: "paper-toolbar",
    x: 580,
    y: 940,
    handyScale: 0.1,
    visible: isItemPicked('paper'),
    onClick: (e) => {
      getFromToolbar(e.target);
    },
  },
]

export default toolbarObjects;