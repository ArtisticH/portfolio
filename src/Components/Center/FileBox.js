import React, { useCallback, useContext } from 'react';
import File from './File';
import styles from '../../Css/Center/FileBox.module.css';
import classNames from 'classnames/bind';
import { useBtns } from '../../Hooks/Btn';
import { Context } from '../../Context/Context';
import { produce } from 'immer';
import { DragDrop } from '../../Hooks/DragDrop';

const cx = classNames.bind(styles);

const FileBox = ({ file }) => {
  const {
    red,
    clickRed,
    yellow,
    clickYellow,
    green,
    clickGreen,
    yellowBan,
    greenBan,
    greenStyle,
  } = useBtns('file', file.location);
  const { actions: { setCurrentFile }} = useContext(Context);

  const Click = useCallback((e) => {
    // 파일을 선택하고 빈 공간을 선택하는 경우 폴더 배경 효과 삭제
    const fileElem = e.target.closest('[data-file]');
    if(!fileElem) {
      setCurrentFile(
        produce(draft => {
          draft[file.location] = null;
        })
      )
    }    
  });

  return (
    <div
      className={cx('file', { red }, file.location)}
      style={green ? greenStyle : null}
      onPointerDown={DragDrop}
    >
      <div className={cx('nav')} onDoubleClick={clickGreen}>
        <div className={cx('title')}>{file.title}</div>
        <div className={cx('btns')}>
          <div className={cx('btn-red')} onClick={clickRed}></div>
          <div
            className={cx('btn-yellow', { banned: yellowBan })}
            onClick={clickYellow}
          ></div>
          <div
            className={cx('btn-green', { banned: greenBan })}
            onClick={clickGreen}
          ></div>
        </div>
      </div>
      <div className={cx('main', { yellow })} onClick={Click}>
        {file.info.map((info) => (
          <File key={info.title} info={info} location={file.location} />
        ))}
      </div>
    </div>
  );
};

export default FileBox;
