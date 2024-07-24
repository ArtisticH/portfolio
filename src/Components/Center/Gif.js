import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Center/Gif.module.css';
import Imgs from '../../Img/Nav';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const {
  left: { arrow },
} = Imgs;
const cx = classNames.bind(styles);

const Gif = ({ gif }) => {
  const This = useRef(null);
  const {
    state: { gifBtn, browser },
    actions: { setGif },
  } = useContext(Context);
  const [red, setRed] = useState(false); // 레드 버튼
  const [yellow, setYellow] = useState(false); // 노랑 버튼
  const [green, setGreen] = useState(false); // 노랑 버튼
  const [greenBan, setGreenBan] = useState(false); 
  const [yellowBan, setYellowBan] = useState(false); 
  // 레드 버튼 누르면 draft.#.red = true;로 변경하고
  // useEffect로 캐치해서 setInvisible(gifBtn.#.red); 즉, 참 값으로 변경해 클래스에서 display: none;을 활성화시킨다.
  const clickRed = useCallback(() => {
    if (gif.title === 'Book Club') {
      setGif(
        produce((draft) => {
          draft.bookclub.red.clicked = true;
        })
      );
    } else if (gif.title === 'Spotify Design') {
      setGif(
        produce((draft) => {
          draft.spotify.red.clicked = true;
        })
      );
    }
  }, []);
  // 레드 버튼 클릭한 경우 red 상태 변경
  useEffect(() => {
    if (gif.title === 'Book Club') {
      setRed(gifBtn.bookclub.red.clicked);
    } else if (gif.title === 'Spotify Design') {
      setRed(gifBtn.spotify.red.clicked);
    }
  }, [gifBtn.bookclub.red, gifBtn.spotify.red]);
  // 상단바만 남기기, 역시나 상태 변경 => useEffect에서 캐치 => 클래스로 인한 CSS변화 반영
  // 노란 버튼 클릭시 초록색 비활성화 해야돼, 노랑과 파랑은 서로 상호작용
  const clickYellow = useCallback(() => {
    if(yellowBan) return;
    if (gif.title === 'Book Club') {
      setGif(
        produce((draft) => {
          draft.bookclub.yellow.clicked = !draft.bookclub.yellow.clicked; // 토글효과
          draft.bookclub.green.banned = draft.bookclub.yellow.clicked;
        })
      );
    } else if (gif.title === 'Spotify Design') {
      setGif(
        produce((draft) => {
          draft.spotify.yellow.clicked = !draft.spotify.yellow.clicked;
          draft.spotify.green.banned = draft.spotify.yellow.clicked;
        })
      );
    }
  }, [yellowBan]);
  // 노랑 버튼 클릭한 경우 상태 변경
  useEffect(() => {
    if (gif.title === 'Book Club') {
      setYellow(gifBtn.bookclub.yellow.clicked);
      setGreenBan(gifBtn.bookclub.green.banned);
    } else if (gif.title === 'Spotify Design') {
      setYellow(gifBtn.spotify.yellow.clicked);
      setGreenBan(gifBtn.spotify.green.banned);
    }
  }, [gifBtn.bookclub.yellow, gifBtn.spotify.yellow]); 
  // 초록 버튼 클릭시
  // 노랑 버튼 활성화되어 있으면 클릭 안되게끔 
  const clickGreen = useCallback(() => {
    if(greenBan) return;
    if (gif.title === 'Book Club') {
      setGif(
        produce((draft) => {
          draft.bookclub.green.clicked = !draft.bookclub.green.clicked; 
          draft.bookclub.yellow.banned = draft.bookclub.green.clicked;
        })
      );
    } else if (gif.title === 'Spotify Design') {
      setGif(
        produce((draft) => {
          draft.spotify.green.clicked = !draft.spotify.green.clicked; 
          draft.spotify.yellow.banned = draft.spotify.green.clicked;
        })
      );
    }
  }, [greenBan]);
  // 초록 버튼 클릭한 경우 상태 변경
  useEffect(() => {
    if (gif.title === 'Book Club') {
      setGreen(gifBtn.bookclub.green.clicked);
      setYellowBan(gifBtn.bookclub.yellow.banned);
    } else if (gif.title === 'Spotify Design') {
      setGreen(gifBtn.spotify.green.clicked);
      setYellowBan(gifBtn.spotify.yellow.banned);
    }
  }, [gifBtn.bookclub.green, gifBtn.spotify.green]);   
  // 창 키우는 효과
  const greenStyle = {
    width: browser.width,
    height: browser.height,
    top: '0',
    left: '0',
  };

  return (
    <div className={cx('gif', { red }, gif.location)} ref={This} style={green ? greenStyle : null}>
      <div className={cx('nav')}>
        <div className={cx('title')}>{gif.title}</div>
        <div className={cx('btns')}>
          <div className={cx('btn-red')} onClick={clickRed}></div>
          <div className={cx('btn-yellow', { banned: yellowBan })} onClick={clickYellow}></div>
          <div className={cx('btn-green', { banned: greenBan })} onClick={clickGreen}></div>
        </div>
      </div>
      <div className={cx('main', { yellow })}>
        <a className={cx('arrow')} href={gif.href} target="_blank">
          <img className="basic-img" src={arrow} alt="arrow" />
        </a>
        <img className="basic-img" src={gif.src} alt="gif" />
      </div>
    </div>
  );
};

export default Gif;
