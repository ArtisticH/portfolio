import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../../Css/Center/Folder.module.css';
import folderIcon from '../../Img/folder.png';
import classNames from 'classnames/bind';
import { produce } from 'immer';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const Folder = React.memo(({ folder }) => {
  const This = useRef(null);
  const [clicked, setClick] = useState(false);
  const {
    state: { btn, currentFolder },
    actions: { setBtn, setCurrentFolder },
  } = useContext(Context);
  const Click = useCallback(() => {
    setCurrentFolder(This);
  }, []);
  useEffect(() => {
    if (This == currentFolder) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [currentFolder]);
  // 폴더에 맞는 파일창 열기
  const DoubleClick = useCallback(() => {
    if(btn['file'][folder.prop].red.clicked) {
      // 파일 창이 닫힌 상태라면 상태를 바꿔서 연다.
      setBtn(
        produce(draft => {
          draft['file'][folder.prop].red.clicked = false;
        })
      )
    } 
  }, [btn['file'][folder.prop].red]);
  // data-folder="true"는 빈 공간을 클릭하는 경우 폴더가 아님을 구분하기 위해 => <Background />
  return (
    <div
      className={cx('folder')}
      onClick={Click}
      ref={This}
      data-folder="true"
      onDoubleClick={DoubleClick}
    >
      <div className={cx('icon', { clicked })}>
        <img className="basic-img" src={folderIcon} alt="folder" />
      </div>
      <div className={cx('name', { clicked })}>{folder.title}</div>
    </div>
  );
});

export default Folder;
