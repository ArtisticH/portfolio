import React from 'react';
import styles from '../../Css/Center/Sticker.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Sticker = () => {
  return (
    <div class={cx('sticker')}>
      <div class={cx('btns')}>
        <div class="btn-red"></div>
        <div class="btn-yellow"></div>
        <div class="btn-green"></div>  
      </div>
      <div class={cx('main')}></div>
    </div>
  );
};

export default Sticker;