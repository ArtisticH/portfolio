import React from 'react';
import styles from '../../Css/Center/Folder.module.css';
import folder from '../../Img/folder.png'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Folder = ({ title }) => {
  return (
    <div className={cx('folder')}>
    <div className={cx('icon')}>
      <img className="basic-img" src={folder} alt="folder"/>
    </div>
    <div className={cx('name')}>{title}</div>
  </div>
  );
};

export default Folder;