import React from 'react';
import File from './File';
import styles from '../../Css/Center/FileBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FileBox = ({ file }) => {
  return (
    <div className={cx('file', file.location)}>
    <div className={cx('nav')}>
      <div className={cx('title')}>{file.title}</div>
      <div className={cx('btns')}>
        <div className="btn-red"></div>
        <div className="btn-yellow"></div>
        <div className="btn-green"></div>
      </div>  
    </div>
    <div className={cx('main')}>
      {file.info.map(info => 
        <File info={info}/>
      )}
    </div>
  </div>
  );
};

export default FileBox;