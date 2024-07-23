import React from 'react';
import '../../Css/Center/Music.css';
import musicImgs from '../../Img/Music';
import classNames from 'classnames/bind';
import styles from '../css/Booting.module.css';

const cx = classNames.bind(styles);


const Music = () => {
  return (
    <div className="music">
      <div className="btns">
        <div className="btn-red"></div>
      </div>
      <img className="music-img" src={musicImgs.cover.Cool} alt=""/>
      <div className="opers">
        <div>
          <div className="song">Cool</div>
          <div className="singer">Dua Lipa</div>
        </div>
        <div className="oper-btns">
          <div className="oper-btn">
            <img className='basic-img' src={musicImgs.btn.prev} alt=""/>
          </div>
          <div className="oper-btn">
            <img className='basic-img' src={musicImgs.btn.play} alt=""/>
          </div>
          <div className="oper-btn">
            <img className='basic-img' src={musicImgs.btn.next} alt=""/>
          </div>
        </div>
      </div>  
      <audio id="audio" src=""></audio>
    </div>
  );
};

export default Music;