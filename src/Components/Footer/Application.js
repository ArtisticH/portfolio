import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Application.module.css';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const Application = ({ app }) => {
  const { actions: { setModal }} = useContext(Context);
  const ModalChange = useCallback(() => {
    setModal(clicked => !clicked);
  }, []);
  return (
    <div className={cx('app')} onClick={!app.circle ? ModalChange : null}>
      <div className={cx('icon')}>
        <img className="basic-img" src={app.src} alt="application"/>
      </div>
      { app.circle && <div className={cx('circle')}></div>}
      <div className={cx('tooltip')}>{app.title}</div>
    </div>
  );
};

export default Application;