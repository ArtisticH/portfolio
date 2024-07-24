import React, { useRef, useCallback, useState, useContext, useEffect } from 'react';
import styles from '../../Css/Center/Sticker.module.css';
import classNames from 'classnames/bind';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const cx = classNames.bind(styles);

const Sticker = () => {
  const This = useRef(null);
  const [invisible, setInvisible] = useState(false);
  const { state: { iconRelated }, actions: { setIconRelated } } = useContext(Context);

  const Close = useCallback(() => {
    setInvisible(() => true);
    setIconRelated(
      produce(draft => {
        draft.sticker.appClosed = true;
        draft.sticker.iconClicked = false;
      })
    )
  }, []);

  useEffect(() => {
    if(!iconRelated.sticker.appClosed && iconRelated.sticker.iconClicked) {
      setInvisible(() => false);
    }
  }, [iconRelated.sticker])

  return (
    <div className={cx('sticker', { invisible })} ref={This}>
      <div className={cx('btns')}>
        <div className="btn-red" onClick={Close}></div>
        <div className="btn-yellow"></div>
        <div className="btn-green"></div>  
      </div>
      <div className={cx('main')}></div>
    </div>
  );
};

export default Sticker;