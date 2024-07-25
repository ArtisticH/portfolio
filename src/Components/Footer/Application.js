import React, { useCallback, useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Application.module.css';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const cx = classNames.bind(styles);

const Application = React.memo(({ app }) => {
  const {
    state: {
      music: { play },
      iconRelated,
    },
    actions: { setModal, setMusic, setStopMusic, setIconRelated },
  } = useContext(Context);
  const [tooltip, setTooltip] = useState(false);

  const ModalChange = useCallback(() => {
    if (play === 'PLAY') {
      setStopMusic(true);
      setMusic((obj) => ({
        ...obj,
        play: 'PAUSE',
      }));
    }
    setModal(true);
  }, [play]);
  // iconRelated가 업데이트될때마다 함수가 생성된다.
  // appClosed = true일때 즉 창을 닫을때 invisible: true로 서클이 사라진다.
  const circleInvisible = useCallback(() => {
    return app.title === 'Music'
      ? iconRelated.music.appClosed
      : app.title === 'Sticker'
      ? iconRelated.sticker.appClosed
      : null;
  }, [iconRelated]);
  // 더블클릭시 appClosed = true, 창을 닫은 상태에서만 활성화되며
  // 다시 appClosed = false로 서클 등장시키고
  // iconClicked = true로 dblclicked: true값을 만들어 애니메이션 활성화시킨다.
  const DoubleClick = useCallback(() => {
    if (app.title === 'Music' && iconRelated.music.appClosed) {
      setIconRelated(
        produce((draft) => {
          draft.music.appClosed = false; 
          draft.music.iconClicked = true;
        })
      );
    } else if (app.title === 'Sticker' && iconRelated.sticker.appClosed) {
      setIconRelated(
        produce((draft) => {
          draft.sticker.appClosed = false;
          draft.sticker.iconClicked = true;
        })
      );
    }
  }, [iconRelated]);
  // 애니메이션 클래스 추가/제거
  const animation = useCallback(() => {
    return app.title === 'Music'
      ? iconRelated.music.iconClicked
      : app.title === 'Sticker'
      ? iconRelated.sticker.iconClicked
      : null;
  }, [iconRelated]);
  // 툴팁
  const PointerEnter = useCallback(() => {
    setTooltip(true);
  }, []);
  const PointerLeave = useCallback(() => {
    setTooltip(false);
  }, []);

  return (
    <div
      className={cx('app', { dblclicked: animation() })}
      onClick={!app.circle ? ModalChange : null}
      onDoubleClick={DoubleClick}
      onPointerEnter={PointerEnter}
      onPointerLeave={PointerLeave}
    >
      <div className={cx('icon')}>
        <img className="basic-img" src={app.src} alt="application" />
      </div>
      {app.circle && (
        <div className={cx('circle', { invisible: circleInvisible() })}></div>
      )}
      <div className={cx('tooltip', { visible: tooltip })}>{app.title}</div>
    </div>
  );
});

export default Application;
