import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Application.module.css';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const cx = classNames.bind(styles);

const Application = ({ app }) => {
  const { state: { music, iconRelated }, actions: { setModal, setMusic, setStopMusic, setIconRelated }} = useContext(Context);

  const ModalChange = useCallback(() => {
    setModal(true);
    if(music.play === 'PLAY') {
      setStopMusic(true);
      setMusic(obj => ({
        ...obj,
        play: 'PAUSE',
      }))
    }
  }, [music.play]);

  const circleInvisible = useCallback(() => {
    return app.title === 'Music' ? iconRelated.music.appClosed : app.title === 'Sticker' ? iconRelated.sticker.appClosed : null
  }, [iconRelated]);

  const animation = useCallback(() => {
    return app.title === 'Music' ? iconRelated.music.iconClicked : app.title === 'Sticker' ? iconRelated.sticker.iconClicked : null
  }, [iconRelated]);

  const DoubleClick = useCallback(() => {
    if(app.title === 'Music' && iconRelated.music.appClosed) {
      setIconRelated(
        produce(draft => {
          draft.music.appClosed = false; // 다시 서클 등장하고
          draft.music.iconClicked = true;
        })
      )  
    } else if(app.title === 'Sticker' && iconRelated.sticker.appClosed) {
      setIconRelated(
        produce(draft => {
          draft.sticker.appClosed = false;
          draft.sticker.iconClicked = true;
        })
      )  
    }
  }, [iconRelated]);

  return (
    <div className={cx('app', { dblclicked: animation() })} onClick={!app.circle ? ModalChange : null} onDoubleClick={DoubleClick}>
      <div className={cx('icon')}>
        <img className="basic-img" src={app.src} alt="application"/>
      </div>
      { app.circle && <div className={cx('circle', { invisible: circleInvisible() })}></div>}
      <div className={cx('tooltip')}>{app.title}</div>
    </div>
  );
};

export default Application;