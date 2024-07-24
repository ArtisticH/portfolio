import React from 'react';
import FolderBox from './FolderBox';
import Gif from './Gif';
import Music from './Music';
import bookclubGif from '../../Gif/bookclub.gif';
import spotifyGif from '../../Gif/spotify.gif';
import Sticker from './Sticker';
import FileBox from './FileBox';

const gifs = [
  {
    title: 'Book Club',
    location: 'bookclub',
    href: '',
    src: bookclubGif,
  },
  {
    title: 'Spotify Design',
    location: 'spotify',
    href: '',
    src: spotifyGif,
  }
];


const files = [
  {
    title: 'Book Club',
    location: 'bookclub',
    info: [
      {
        title: 'Vanilla - Github',
        href: '',
      },
      {
        title: 'Vanilla - Site',
        href: '',
      },
      {
        title: `React(Redux)
        + Typescript
        - Github`,
        href: '',
      },
      {
        title: `React(Redux)
        + Typescript
        - Site`,
        href: '',
      },
      {
        title: '.gif',
        href: '',
      },
    ]
  },
  {
    title: 'Spotify Design',
    location: 'spotify',
    info: [
      {
        title: 'Vanilla - Github',
        href: '',
      },
      {
        title: 'Vanilla - Site',
        href: '',
      },
      {
        title: `React
        + Typescript
        - Github`,
        href: '',
      },
      {
        title: `React
        + Typescript
        - Site`,
        href: '',
      },
      {
        title: '.gif',
        href: '',
      },
    ]
  },
  {
    title: 'Intro',
    location: 'intro',
    info: [
      {
        title: 'Vanilla - Github',
        href: '',
      },
      {
        title: 'Vanilla - Site',
        href: '',
      },
      {
        title: `React
        + Typescript
        - Github`,
        href: '',
      },
      {
        title: `React
        + Typescript
        - Site`,
        href: '',
      },
    ]
  }
];

const Center = () => {
  const style = {
    height: 'calc(100vh - 100px)',
    position: 'relative',
    zIndex: '10',
  };
  return (
    <div style={style}>
      <FolderBox />
      {/* {files.map(file => 
        <FileBox key={file.title} file={file}/>
      )} */}
      {/* {gifs.map(gif => 
        <Gif key={gif.title} gif={gif}/>
      )} */}
      <Sticker />
      <Music/>
    </div>
  );
};

export default Center;