import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Imgs from '../../Img/Music';
import Audios from '../../Audio';
import classNames from 'classnames/bind';
import styles from '../../Css/Center/Music.module.css';
import { Context } from '../../Context/Context';
import { produce } from 'immer';
import DragDrop from '../../Hooks/DragDrop';
import { useClose } from '../../Hooks/Close';

/*
// 기능
1. 재생(멈춤) 버튼 클릭시 노래가 재생되거나 멈추고, 아이콘이 바뀐다. 💥 
2. 다음, 이전 버튼클릭시 이미지와 오디오가 바뀐다. 💥 
3. 재생중 모달을 클릭하면 노래가 멈춘다. 그리고 모달 닫으면 노래 다시 재생 💥 => Context API
4. 현재 노래 끝나면 다음 노래 자동 재생 💥 
5. 레드 버튼을 클릭하면 노래 멈추고 창 사라지고, 아래 앱과 연계해서 뮤직 앱은 동그라미가 사라진다. => Context API 💥 
6. 뮤직 앱 클릭시 애니메이션 효과와 뮤직 컴포넌트 다시 등장 => Context API 💥 
7. 드래그앤드롭 => 리듀서 정의해서 가져다 쓰기?
8. pointerenter로, 버튼들 보여주기 💥 
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

const Music = () => {
  const This = useRef(null);
  const Audio = useRef(null);
  const PlayImg = useRef(null);
  const PlayBtn = useRef(null);
  const [visible, setVisible] = useState(false); // 호버효과
  const {
    state: { music, iconRelated },
    actions: { setMusic },
  } = useContext(Context);
  const { invisible, setInvisible, clickClose } = useClose('music', () => {
    setMusic(
      produce((draft) => {
        draft.play = 'PAUSE';
      })
    );
  });
  // Application에서 더블클릭시 창이 나타나야 한다.
  // Application에서 appClosed: false && iconClicked: true로 값을 만들면
  // 여기서 캐치한다.
  useEffect(() => {
    if (!iconRelated.music.appClosed && iconRelated.music.iconClicked) {
      setInvisible(false);
    }
  }, [iconRelated.music]);
  // 호버 효과, 이 앱에만 한정되기 때문에 컴포넌트 상태 사용
  const Visible = useCallback(() => {
    setVisible(true); // 보이기
  }, []);
  const Invisible = useCallback(() => {
    setVisible(false); // 사라지기
  }, []);
  // 재생, 멈춤, 다음노래, 이전 노래, 모달 관련
  const nextMusic = useCallback(() => {
    setMusic((obj) => ({
      ...obj,
      index: obj.index === 7 ? 0 : obj.index + 1,
    })); // 인덱스 바꾸기
  }, []);
  const prevMusic = useCallback(() => {
    setMusic((obj) => ({
      ...obj,
      index: obj.index === 0 ? 7 : obj.index - 1,
    })); // 인덱스 바꾸기
  }, []);
  const PlayMusic = useCallback(() => {
    setMusic((obj) => ({
      ...obj,
      play: 'PLAY',
    })); // 현재 인덱스는 그대로, 노래 재생
  }, []);
  const PauseMusic = useCallback(() => {
    setMusic((obj) => ({
      ...obj,
      play: 'PAUSE',
    }));
  }, []);
  // 상태가 업데이트될때마다 특정 작업 수행
  useEffect(() => {
    if (music.play === 'PLAY') {
      Audio.current.play();
      PlayImg.current.src = btn.pause;
    } else if (music.play === 'PAUSE') {
      Audio.current.pause();
      PlayImg.current.src = btn.play;
    }
  }, [music]);

  return (
    <div
      className={cx('music', { invisible })}
      onPointerEnter={Visible}
      onPointerLeave={Invisible}
      onPointerDown={DragDrop}
      ref={This}
    >
      <div className={cx('btns', { visible })}>
        <div className="btn-red" onClick={clickClose}></div>
      </div>
      <img className={cx('music-img')} src={PLAYLIST[music.index].IMG} alt="" />
      <div className={cx('opers', { visible })}>
        <div>
          <div className={cx('song')}>{PLAYLIST[music.index].SONG}</div>
          <div className={cx('singer')}>{PLAYLIST[music.index].SINGER}</div>
        </div>
        <div className={cx('oper-btns')}>
          <div className={cx('oper-btn')} onClick={prevMusic}>
            <img className="basic-img" src={btn.prev} alt="" />
          </div>
          <div
            className={cx('oper-btn')}
            onClick={music.play === 'PLAY' ? PauseMusic : PlayMusic}
            ref={PlayBtn}
          >
            <img className="basic-img" src={btn.play} ref={PlayImg} alt="" />
          </div>
          <div className={cx('oper-btn')} onClick={nextMusic}>
            <img className="basic-img" src={btn.next} alt="" />
          </div>
        </div>
      </div>
      <audio
        src={PLAYLIST[music.index].AUDIO}
        ref={Audio}
        onEnded={nextMusic}
      ></audio>
    </div>
  );
};

export default Music;
