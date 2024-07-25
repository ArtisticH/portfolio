import React, { useCallback, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Nav/Icon.module.css';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const Icon = React.memo(({ dir, icon, src }) => {
  const { state: { music: { play } }, actions: { setModal, setMusic, setStopMusic }} = useContext(Context);
  // 🎾 useEffect와 Context API 사용시에는 어느 컴포넌트에 useEffect가 있던지
  // 다른 컴포넌트에서 상태 값이 바뀔때 모든 useEffect가 동시에 활성화된다. 
  const ModalChange = useCallback(() => {
    // 만약 노래 재생중에 모달을 클릭한거라면
    // stopMusic: true로 바꾸고 노래 멈춘다.
    // 후에 모달을 취소했을떄 stopMusic: true 상태라면 다시 노래를 재생하지만
    // stopMusic: false라면 원래 노래 PLAY상태가 아니므로 노래가 다시 흘러나오지 않는다.
    if(play === 'PLAY') {
      setStopMusic(true);
      setMusic(obj => ({
        ...obj,
        play: 'PAUSE',
      }))
    }
    setModal(true); // 모달 보여주기
  }, [play]);
  
  return (
    <div className={cx('elem', dir)} onClick={ModalChange}>
      <img className={cx('icon', icon)} src={src} alt=''/>
    </div>
  );
});

export default Icon;