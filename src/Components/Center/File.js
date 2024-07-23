import React from 'react';
import fileIcon from '../../Img/file.png'
import styles from '../../Css/Center/File.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const File = ({ info }) => {
  return (
    <div className={cx()} href={info.href}>
      <div className={cx('icon')}>
        <img className="basic-img" src={fileIcon} alt="file"/>
      </div>
      <div className={cx('name')}>{info.title}</div>
    </div>
  );
};

export default File;