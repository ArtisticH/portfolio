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

const Lis = React.memo(({ li, arrow, children }) => {
  const This = useRef(null);
  const PointerEnter = useCallback(() => {
    console.log('여기')
    This.current.lastElementChild.style.visibility = 'visible';
    console.log('d', This.current.lastElementChild);
  }, []);

  return (
    <li className={cx('li')} onPointerEnter={PointerEnter} ref={This}>
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

const Versions = React.memo(({ children }) => {
  const This = useRef(null);
  const [visible, setVisible] = useState(false);
  const {
    state: { currentLis },
    actions: { setCurrentLis },
  } = useContext(Context);

  return (
    <ul className={cx('versions', { visible })} ref={This}>
      {children}
    </ul>
  );
});

const Ul = React.memo(({ children, width }) => {
  const This = useRef(null);
  const [visible, setVisible] = useState(false);
  const {
    state: { currentList },
    actions: { setCurrentLis },
  } = useContext(Context);

  useEffect(() => {
    if (currentList.clicked && currentList.ul == This.current) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentList]);

  return (
    <ul className={cx('ul', width, { visible })} ref={This}>
      {children}
    </ul>
  );
});

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
        draft.target = This.current; // 현재 클릭한 리스트
        draft.clicked = !draft.clicked; // 클릭여부
        draft.ul = This.current.lastElementChild;
      })
    );
  }, []);

  useEffect(() => {
    if (currentList.clicked && currentList.target == This.current) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [currentList]);

  return (
    <div
      className={cx('elem', { clicked })}
      onClick={Click}
      data-list="true"
      ref={This}
    >
      <div className={cx('elem-title')}>{title}</div>
      {children}
    </div>
  );
});

export { List, Ul, Lis, Versions };
