import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Application.module.css';

const cx = classNames.bind(styles);

const Application = ({ app }) => {
  return (
    <div className={cx('app')}>
      <div className={cx('icon')}>
        <img className="basic-img" src={app.src} alt="application"/>
      </div>
      { app.circle && <div className={cx('circle')}></div>}
      <div className={cx('tooltip')}>{app.title}</div>
    </div>
  );
};

export default Application;