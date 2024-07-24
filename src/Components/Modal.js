import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Css/Modal.module.css';
import { Context } from '../Context/Context';

const cx = classNames.bind(styles);

const Modal = () => {
  const { state: { stopMusic }, actions: { setModal, setMusic, setStopMusic }} = useContext(Context);
  const ModalChange = useCallback(() => {
    setModal(false); // 모달 없애기
    if(stopMusic) { // 모달이 등장할때 노래가 재생중이였다면 다시 재생시키기
      setMusic(obj => ({
        ...obj,
        play: 'PLAY',
      }));
      setStopMusic(false);
    }
  }, [stopMusic]);

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