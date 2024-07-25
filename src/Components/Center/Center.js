import React, { useRef, useEffect, useContext } from 'react';
import FolderBox from './FolderBox';
import Gif from './Gif';
import Music from './Music';
import bookclubGif from '../../Gif/bookclub.gif';
import spotifyGif from '../../Gif/spotify.gif';
import Sticker from './Sticker';
import FileBox from './FileBox';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const gifs = [
  {
    title: 'Book Club',
    location: 'bookclub', // CSS에서 사용할 클래스 이름, 전역 변수에서 프로퍼티 이름으로 사용
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
        title: 'Vanilla\n<Github>',
        href: '',
      },
      {
        title: 'Vanilla\n<Site>',
        href: '',
      },
      {
        title: `React(Redux)\n+Typescript\n<Github>`,
        href: '',
      },
      {
        title: `React(Redux)\n+Typescript\n<Site>`,
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
        title: 'Vanilla\n<Github>',
        href: '',
      },
      {
        title: 'Vanilla\n<Site>',
        href: '',
      },
      {
        title: `React\n+Typescript\n<Github>`,
        href: '',
      },
      {
        title: `React\n+Typescript\n<Site>`,
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
        title: 'Vanilla\n<Github>',
        href: '',
      },
      {
        title: 'Vanilla\n<Site>',
        href: '',
      },
      {
        title: `React\n+Typescript\n<Github>`,
        href: '',
      },
      {
        title: `React\n+Typescript\n<Site>`,
        href: '',
      },
    ]
  }
];

const Center = () => {
  const This = useRef(null);
  const style = {
    height: 'calc(100vh - 100px)',
    position: 'relative',
    zIndex: '10',
  };
  const { actions: { setBrowser }} = useContext(Context);
  
  useEffect(() => {
    setBrowser(
      produce(draft => {
        draft.height = This.current.offsetHeight;
        draft.width = document.documentElement.clientWidth;
      })
    )
  }, [])

  useEffect(() => {
    const changeSize = () => {
      setBrowser(
        produce(draft => {
          draft.height = This.current.offsetHeight;
          draft.width = document.documentElement.clientWidth;
        })
      )
    };
    window.addEventListener('resize', changeSize);
    return () => {
      window.removeEventListener('resize', changeSize);
    };
  }, []);

  return (
    <div style={style} ref={This}>
      <FolderBox />
      {files.map(file => 
        <FileBox key={file.title} file={file}/>
      )}
      {gifs.map(gif => 
        <Gif key={gif.title} gif={gif}/>
      )}
      <Sticker />
      <Music/>
    </div>
  );
};

export default Center;