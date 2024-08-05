import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import fileIcon from '../../Img/file.png';
import styles from '../../Css/Center/File.module.css';
import classNames from 'classnames/bind';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const cx = classNames.bind(styles);

const File = React.memo(({ info, location }) => {
  const This = useRef(null);
  const [clicked, setClick] = useState(false);
  const {
    state: { currentFile },
    actions: { setCurrentFile, setBtn },
  } = useContext(Context);
  const Click = useCallback(() => {
    setCurrentFile(
      produce((draft) => {
        draft[location] = This;
      })
    );
  }, []);
  useEffect(() => {
    if (This == currentFile[location]) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [currentFile[location]]);
  const DoubleClick = useCallback(() => {
    window.open(info.href, '_blank');
  }, [])
  const Gif = useCallback(() => {
    setBtn(
      produce((draft) => {
        draft.gif[info.href].red.clicked = false;
      })
    )
  }, [])
  // data-file="true"는 빈 공간을 클릭하는 경우 파일이 아님을 구분하기 위해 => <FileBox />의 .main
  return (
    <div
      className={cx('file')}
      onClick={Click}
      onDoubleClick={info.title === '.gif' ? Gif : DoubleClick}
      ref={This}
      data-file="true"
    >
      <div className={cx('icon', { clicked })}>
        <img className="basic-img" src={fileIcon} alt="file" />
      </div>
      <div className={cx('name', { clicked })}>{info.title}</div>
    </div>
  );
});

export default File;
