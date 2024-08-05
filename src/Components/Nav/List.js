import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../../Css/Nav/List.module.css';
import classNames from 'classnames/bind';
import Imgs from '../../Img/Nav';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const cx = classNames.bind(styles);

const List = React.memo(({ title, children }) => {
  const This = useRef(null);
  const [clicked, setClicked] = useState(false);
  const {
    state: { currentList },
    actions: { setCurrentList },
  } = useContext(Context);
  const Click = useCallback(() => {
    setCurrentList(
      produce((draft) => {
        draft.list = This.current; // 현재 클릭한 리스트
        draft.clicked = !draft.clicked; // 클릭여부
        draft.types = This.current.lastElementChild;
      })
    );
  }, []);

  useEffect(() => {
    if (currentList.clicked && currentList.list == This.current) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [currentList]);

  return (
    <div
      className={cx('list', { clicked })}
      onClick={Click}
      data-list="true"
      ref={This}
    >
      <div className={cx('list-title')}>{title}</div>
      {children}
    </div>
  );
});

const Types = React.memo(({ children }) => {
  const This = useRef(null);
  const [visible, setVisible] = useState(false);
  const {
    state: { currentList },
    actions: { setCurrentType },
  } = useContext(Context);

  useEffect(() => {
    if (currentList.clicked && currentList.types == This.current) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentList]);

  const PointerOver = useCallback((e) => {
    const target = e.target.closest('[data-type]');
    if (!target) return;
    setCurrentType(
      produce((draft) => {
        draft.hovered = true;
        draft.type = target;
        draft.ways = target.lastElementChild;
      })
    );
  }, []);

  const PointerOut = useCallback((e) => {
    const target = e.target.closest('[data-type]');
    if (target) return;
    setCurrentType(
      produce((draft) => {
        draft.hovered = false;
        draft.type = null;
        draft.ways = null;
      })
    );
  }, []);

  return (
    <ul
      className={cx('types', { visible })}
      ref={This}
      onPointerOver={PointerOver}
      onPointerOut={PointerOut}
    >
      {children}
    </ul>
  );
});

const Type = React.memo(({ li, arrow, children }) => {
  return (
    <li className={cx('li')} data-type="true">
      <a className={cx('li-title')} href={li.href} target="_blank">
        {li.title}
      </a>
      {arrow && (
        <div className={cx('arrow')}>
          <img className="basic-img" src={Imgs.left.arrow} alt="arrow" />
        </div>
      )}
      {children}
    </li>
  );
});

const Ways = React.memo(({ children }) => {
  const This = useRef(null);
  const [visible, setVisible] = useState(false);
  const {
    state: { currentType },
  } = useContext(Context);


  useEffect(() => {
    if (currentType.hovered && currentType.ways == This.current) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentType]);

  return (
    <ul className={cx('ways', { visible })} ref={This}>
      {children}
    </ul>
  );
});

const Way = React.memo(({ li, arrow, children }) => {
  const {
    actions: { setCurrentList, setCurrentType },
  } = useContext(Context);

  const Click = useCallback(() => {
    console.log('클릭')
    setCurrentType(
      produce((draft) => {
        draft.hovered = false;
        draft.type = null;
        draft.ways = null;
      })
    );
    setCurrentList(
      produce((draft) => {
        draft.list = null;
        draft.clicked = null;
        draft.types = null;
      })
    );  
  }, [])

  return (
    <li className={cx('li')} onClick={Click}>
      <a className={cx('li-title')} href={li.href} target="_blank">
        {li.title}
      </a>
      {arrow && (
        <div className={cx('arrow')}>
          <img className="basic-img" src={Imgs.left.arrow} alt="arrow" />
        </div>
      )}
      {children}
    </li>
  );
});

export { List, Types, Type, Ways, Way };
