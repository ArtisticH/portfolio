import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Css/Modal.module.css';
import { Context } from '../Context/Context';

const cx = classNames.bind(styles);

const Modal = () => {
  const { state: { music, stopMusic }, actions: { setModal, setMusic, setStopMusic }} = useContext(Context);
  const ModalChange = useCallback(() => {
    setModal(false);
    if(stopMusic) {
      setMusic(obj => ({
        ...obj,
        play: 'PLAY',
      }))
      setStopMusic(false);
    }
  }, [music.play, stopMusic]);

  return (
    <>
      <div className={cx('background')}></div>
      <section className={cx('modal')}>
        <div className={cx('nav')}>
          <div>알림</div>
          <div className={cx('cancel')} onClick={ModalChange}>
            <div className={cx('left')}></div>
            <div className={cx('right')}></div>  
          </div>
        </div>
        <div className={cx('text')}>
          기능이 없습니다.
        </div>
      </section>    
    </>
  );
};

export default Modal;