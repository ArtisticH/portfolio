import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from '../../Css/Center/Folder.module.css';
import folder from '../../Img/folder.png'
import classNames from 'classnames/bind';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const Folder = ({ title }) => {
  const This = useRef(null);
  const [clicked, setClick] = useState(false);
  const { state: { currentFolder }, actions: { setCurrentFolder }} = useContext(Context);
  const Click = useCallback(() => {
    setCurrentFolder(This);
  }, []);
  useEffect(() => {
    if(This == currentFolder) {
      setClick(true)
    } else {
      setClick(false);
    }
  }, [currentFolder])
  // data-folder="true"는 빈 공간을 클릭하는 경우 폴더가 아님을 구분하기 위해 => <Background />
  return (
    <div className={cx('folder')} onClick={Click} ref={This} data-folder="true">
      <div className={cx('icon', { clicked })}>
        <img className="basic-img" src={folder} alt="folder"/>
      </div>
      <div className={cx('name', { clicked })}>{title}</div>
    </div>
  );
};

export default Folder;