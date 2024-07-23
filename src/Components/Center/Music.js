import React, { useEffect, useReducer, useRef } from 'react';
import Imgs from '../../Img/Music';
import Audios from '../../Audio';
import classNames from 'classnames/bind';
import styles from '../../Css/Center/Music.module.css';


/*
// 기능
1. 재생(멈춤) 버튼 클릭시 노래가 재생되거나 멈추고, 아이콘이 바뀐다. 
2. 다음, 이전 버튼클릭시 이미지와 오디오가 바뀐다. 
3. 재생중 모달을 클릭하면 노래가 멈춘다. 그리고 모달 닫으면 노래 다시 재생
4. 레드 버튼을 클릭하면 노래 멈추고 창 사라지고, 아래 앱과 연계해서 뮤직 앱은 동그라미가 사라진다.
5. 뮤직 앱 클릭시 애니메이션 효과와 뮤직 컴포넌트 다시 등장
6. 드래그앤드롭 
7. pointerenter로, 버튼들 보여주기
*/

const cx = classNames.bind(styles);
const { cover, btn } = Imgs;
const PLAYLIST = [
  {
    AUDIO: Audios.Cool,
    IMG: cover.Cool,
    SONG: 'Cool',
    SINGER: 'Dua Lipa',
  },
  {
    AUDIO: Audios.loveIsEmbarrassing,
    IMG: cover.loveIsEmbarrassing,
    SONG: 'love is embarrassing',
    SINGER: 'Olivia Rodrigo',
  },
  {
    AUDIO: Audios.TheAlchemy,
    IMG: cover.TheAlchemy,
    SONG: 'The Alchemy',
    SINGER: 'Taylor Swift',
  },
  {
    AUDIO: Audios.idontwannabeyouanymore,
    IMG: cover.idontwannabeyouanymore,
    SONG: 'idontwannabeyouanymore',
    SINGER: 'Billie Eilish',
  },
  {
    AUDIO: Audios.CruelSummer,
    IMG: cover.CruelSummer,
    SONG: 'Cruel Summer',
    SINGER: 'Taylor Swift',
  },
  {
    AUDIO: Audios.Houdini,
    IMG: cover.Houdini,
    SONG: 'Houdini',
    SINGER: 'Dua Lipa',
  },
  {
    AUDIO: Audios.WhatWasIMadeFor,
    IMG: cover.WhatWasIMadeFor,
    SONG: 'What Was I Made For',
    SINGER: 'Billie Eilish',
  },
  {
    AUDIO: Audios.obsessed,
    IMG: cover.obsessed,
    SONG: 'obsessed',
    SINGER: 'Olivia Rodrigo',
  },
];

const initialState = {
  INDEX: 0,
  PLAY: null,
};

function reducer(state, action) {
  switch(action.type) {
    case 'NEXT':
      return {
        INDEX: state.INDEX === 7 ? 0 : state.INDEX + 1,
        PLAY: 'PLAY',
      }
    case 'PREV':
      return {
        INDEX: state.INDEX === 0 ? 7 : state.INDEX - 1,
        PLAY: 'PLAY',
      }
    case 'PAUSE':
      return {
        ...state,
        PLAY: 'PAUSE',
      }
    default:
      return state;
  }
}

const Music = () => {
  const Audio = useRef(null);
  const PlayImg = useRef(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(state.PLAY === 'PLAY') {
      Audio.current.play();
    } else if(state.PLAY === 'PAUSE') {
      Audio.current.pause();
      PlayImg.current.src = btn.pause;
    }
  }, [state]);
  
  return (
    <div className={cx('music')}>
      <div className={cx('btns')}>
        <div className="btn-red"></div>
      </div>
      <img className={cx('music-img')} src={PLAYLIST[state.INDEX].IMG} alt=""/>
      <div className={cx('opers')}>
        <div>
          <div className={cx('song')}>{PLAYLIST[state.INDEX].SONG}</div>
          <div className={cx('singer')}>{PLAYLIST[state.INDEX].SINGER}</div>
        </div>
        <div className={cx('oper-btns')}>
          <div className={cx('oper-btn')} onClick={() => {dispatch({type: 'PREV'})}}>
            <img className='basic-img' src={btn.prev} alt=""/>
          </div>
          <div className={cx('oper-btn')} onClick={() => {dispatch({type: 'PAUSE'})}}>
            <img className='basic-img' src={btn.play} ref={PlayImg} alt=""/>
          </div>
          <div className={cx('oper-btn')} onClick={() => {dispatch({type: 'NEXT'})}}>
            <img className='basic-img' src={btn.next} alt=""/>
          </div>
        </div>
      </div>  
      <audio src={PLAYLIST[state.INDEX].AUDIO} ref={Audio}></audio>
    </div>
  );
};

export default Music;