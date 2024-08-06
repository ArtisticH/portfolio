import React, { useRef, useEffect, useContext, useCallback } from 'react';
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
    href: 'https://app.cloudtype.io/@seohanna/bookclub:main/bookclub-frontend',
    src: bookclubGif,
  },
  {
    title: 'Spotify Design',
    location: 'spotify',
    href: 'https://artistich.github.io/spotify',
    src: spotifyGif,
  }
];

const files = [
  {
    title: 'Book Club',
    location: 'bookclub',
    info: [
      {
        title: `React(Redux)\n<Github>`,
        href: 'https://github.com/ArtisticH/bookclub',
      },
      {
        title: `React(Redux)\n<Site>`,
        href: 'https://app.cloudtype.io/@seohanna/bookclub:main/bookclub-frontend',
      },
      {
        title: '.gif',
        href: 'bookclub',
      },
    ]
  },
  {
    title: 'Spotify Design',
    location: 'spotify',
    info: [
      {
        title: 'Vanilla\n<Github>',
        href: 'https://github.com/ArtisticH/spotify',
      },
      {
        title: 'Vanilla\n<Site>',
        href: 'https://artistich.github.io/spotify',
      },
      {
        title: '.gif',
        href: 'spotify',
      },
    ]
  },
  {
    title: 'Intro',
    location: 'intro',
    info: [
      {
        title: `React\n<Github>`,
        href: 'https://github.com/ArtisticH/portfolio',
      },
      {
        title: `React\n<Site>`,
        href: 'https://artistich.github.io/portfolio',
      },
    ]
  }
];

const Center = () => {
  const {
    actions: { setCurrentList, setCurrentType },
  } = useContext(Context);
  const This = useRef(null);
  const style = {
    height: 'calc(100vh - 100px)',
    position: 'relative',
    zIndex: '10',
  };
  const { actions: { setBrowser }} = useContext(Context);
  
  const ClickBlank = useCallback(() => {
    setCurrentType(
      produce((draft) => {
        draft.hovered = false;
        draft.type = null;
        draft.ways = null;
      })
    );
    setCurrentList(
      produce((draft) => {
        draft.list = null;
        draft.clicked = null;
        draft.types = null;
      })
    );
  }, []);

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
    <div style={style} ref={This} onClick={ClickBlank}>
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