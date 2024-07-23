import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Center/Gif.module.css';
import Imgs from '../../Img/Nav';
const { left: { arrow }} = Imgs;

const cx = classNames.bind(styles);

const Gif = ({ gif }) => {
  return (
    <div className={cx('gif', gif.location)}>
      <div className={cx('nav')}>
        <div className={cx('title')}>{gif.title}</div>
        <div className={cx('btns')}>
          <div className="btn-red"></div>
          <div className="btn-yellow"></div>
          <div className="btn-green"></div>
        </div>  
      </div>
      <div className={cx('main')}>
        <a className={cx('arrow')} href={gif.href} target="_blank">
          <img className="basic-img" src={arrow} alt="arrow"/>
        </a>
        <img className="basic-img" src={gif.src} alt="gif"/>
      </div>
    </div>
  );
};

export default Gif;