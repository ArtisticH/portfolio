import React, {
  useRef,
  useContext,
  useEffect,
} from 'react';
import styles from '../../Css/Center/Sticker.module.css';
import classNames from 'classnames/bind';
import { Context } from '../../Context/Context';
import DragDrop from '../../Hooks/DragDrop';
import { useClose } from '../../Hooks/Close';

const cx = classNames.bind(styles);

const Sticker = () => {
  const This = useRef(null);
  const {
    state: { iconRelated },
  } = useContext(Context);
  const { invisible, setInvisible, clickClose } = useClose('sticker');
  useEffect(() => {
    if (!iconRelated.sticker.appClosed && iconRelated.sticker.iconClicked) {
      setInvisible(false);
    }
  }, [iconRelated.sticker]);

  return (
    <div
      className={cx('sticker', { invisible })}
      ref={This}
      onPointerDown={DragDrop}
    >
      <div className={cx('btns')}>
        <div className="btn-red" onClick={clickClose}></div>
        <div className="btn-yellow"></div>
        <div className="btn-green"></div>
      </div>
      <div className={cx('main')}></div>
    </div>
  );
};

export default Sticker;
