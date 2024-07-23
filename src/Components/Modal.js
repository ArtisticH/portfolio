import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Css/Modal.module.css';
import { Context } from '../Context/Context';

const cx = classNames.bind(styles);

const Modal = () => {
  const { actions: { setModal } } = useContext(Context);
  const onClick = useCallback((e) => {
    setModal(clicked => !clicked);
  }, []);
  return (
    <>
      <div className={cx('background')}></div>
      <section className={cx('modal')}>
        <div className={cx('nav')}>
          <div>알림</div>
          <div className={cx('cancel')} onClick={onClick}>
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