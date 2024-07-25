import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Center/Gif.module.css';
import Imgs from '../../Img/Nav';
import { useBtns } from '../../Hooks/Btn';

const {
  left: { arrow },
} = Imgs;
const cx = classNames.bind(styles);

const Gif = ({ gif }) => {
  const {
    red,
    clickRed,
    yellow,
    clickYellow,
    green,
    clickGreen,
    yellowBan,
    greenBan,
    greenStyle,
  } = useBtns(gif.location);

  return (
    <div
      className={cx('gif', { red }, gif.location)}
      style={green ? greenStyle : null}
    >
      <div className={cx('nav')} onDoubleClick={clickGreen}>
        <div className={cx('title')}>{gif.title}</div>
        <div className={cx('btns')}>
          <div className={cx('btn-red')} onClick={clickRed}></div>
          <div
            className={cx('btn-yellow', { banned: yellowBan })}
            onClick={clickYellow}
          ></div>
          <div
            className={cx('btn-green', { banned: greenBan })}
            onClick={clickGreen}
          ></div>
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
