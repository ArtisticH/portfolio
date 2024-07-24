import React from 'react';
import Imgs from '../../Img/Apps';
import Application from './Application';

const style = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '75px',  
};
const innerStyle = {
  zIndex: '15',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
  padding: '8px 8px 2px 8px',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
};

const Applications = [
  {
    title: 'Finder',
    src: Imgs.finder,
    circle: false,
  },
  {
    title: 'Safari',
    src: Imgs.safari,
    circle: false,
  },
  {
    title: 'Music',
    src: Imgs.music,
    circle: true,
  },
  {
    title: 'Podcast',
    src: Imgs.podcast,
    circle: false,
  },
  {
    title: 'Google Chrome',
    src: Imgs.chrome,
    circle: false,
  },
  {
    title: 'Terminal',
    src: Imgs.terminal,
    circle: false,
  },
  {
    title: 'Kakaotalk',
    src: Imgs.kakaotalk,
    circle: false,
  },
  {
    title: 'Sticker',
    src: Imgs.sticker,
    circle: true,
  },
];  

const Footer = () => {

  return (
    <div style={style}>
      <div style={innerStyle}>
      {Applications.map(app =>
      <Application key={app.title} app={app}/>
      )}
      </div>
    </div>
  );
};

export default Footer;