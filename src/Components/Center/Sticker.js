import React, {
  useRef,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import styles from '../../Css/Center/Sticker.module.css';
import classNames from 'classnames/bind';
import { Context } from '../../Context/Context';
import { useClose } from '../../Hooks/Close';
import { DragDrop } from '../../Hooks/DragDrop';
import { produce } from 'immer';

const cx = classNames.bind(styles);

const Sticker = () => {
  const This = useRef(null);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);
  const [greenBan, setGreenBan] = useState(false);
  const [yellowBan, setYellowBan] = useState(false);
  const {
    state: { iconRelated, browser },
  } = useContext(Context);
  const greenStyle = {
    width: browser.width,
    height: browser.height,
    top: '0',
    left: '0',
  };
  const { invisible, setInvisible, clickClose } = useClose('sticker');

  const clickYellow = useCallback(() => {
    if (yellowBan) return;
    setYellow((value) => !value);
  }, [yellowBan]);

  useEffect(() => {
    if (yellow) {
      setGreenBan(true);
    } else {
      setGreenBan(false);
    }
  }, [yellow]);

  useEffect(() => {
    if (green) {
      setYellowBan(true);
    } else {
      setYellowBan(false);
    }
  }, [green]);

  const clickGreen = useCallback(() => {
    if (greenBan) return;
    setGreen((value) => !value);
  }, [greenBan]);

  useEffect(() => {
    if (!iconRelated.sticker.appClosed && iconRelated.sticker.iconClicked) {
      setInvisible(false);
    }
  }, [iconRelated.sticker]);

  return (
    <div
      className={cx('sticker', { invisible })}
      ref={This}
      style={green ? greenStyle : null}
      onPointerDown={DragDrop}
    >
      <div className={cx('btns')} onDoubleClick={clickGreen}>
        <div className="btn-red" onClick={clickClose}></div>
        <div
          className={cx('btn-yellow', { banned: yellowBan })}
          onClick={clickYellow}
        ></div>
        <div
          className={cx('btn-green', { banned: greenBan })}
          onClick={clickGreen}
        ></div>
      </div>
      <div className={cx('main', { yellow })}>
        안녕하세요, 
        <br/>
        저는 사용자 중심의 웹 애플리케이션을 만드는 데 열정을 가진 프론트엔드 개발자 지망생 서한나입니다.
        <br/>
        HTML, CSS, JavaScript와 같은 핵심 기술을 익히며 React와 같은 최신 프레임워크를 활용한 프로젝트 경험이 있습니다. 
        <br/>
        문제 해결 능력과 창의적인 사고를 바탕으로 효율적이고 매력적인 웹 페이지를 제작하는 것이 목표입니다.
        <br/> 
        항상 배우고 성장하며, 팀과 함께 최상의 결과를 도출하는 개발자가 되고자 합니다. 
        <br/>
        감사합니다.
      </div>
    </div>
  );
};

export default Sticker;
