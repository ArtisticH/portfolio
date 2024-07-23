import React from 'react';
import Imgs from '../../Img/Music';
import classNames from 'classnames/bind';
import styles from '../../Css/Center/Music.module.css';

const cx = classNames.bind(styles);
const { cover, btn } = Imgs;


const Music = () => {
  return (
    <div className={cx('music')}>
      <div className={cx('btns')}>
        <div className="btn-red"></div>
      </div>
      <img className={cx('music-img')} src={cover.Cool} alt=""/>
      <div className={cx('opers')}>
        <div>
          <div className={cx('song')}>Cool</div>
          <div className={cx('singer')}>Dua Lipa</div>
        </div>
        <div className={cx('oper-btns')}>
          <div className={cx('oper-btn')}>
            <img className='basic-img' src={btn.prev} alt=""/>
          </div>
          <div className={cx('oper-btn')}>
            <img className='basic-img' src={btn.play} alt=""/>
          </div>
          <div className={cx('oper-btn')}>
            <img className='basic-img' src={btn.next} alt=""/>
          </div>
        </div>
      </div>  
      <audio src=""></audio>
    </div>
  );
};

export default Music;