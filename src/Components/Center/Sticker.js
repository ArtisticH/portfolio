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
      <div className={cx('main', { yellow })}></div>
    </div>
  );
};

export default Sticker;
