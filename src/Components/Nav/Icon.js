import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Nav/Icon.module.css';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const Icon = ({ dir, icon, src }) => {
  const { state: { music }, actions: { setModal, setMusic, setStopMusic }} = useContext(Context);
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

  return (
    <div className={cx('elem', dir)} onClick={ModalChange}>
      <img className={cx('icon', icon)} src={src} alt=''/>
    </div>
  );
};

export default Icon;