import apple from '../Img/apple.png';
import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Css/Booting.module.css';
import { Context } from '../Context/Context';

const cx = classNames.bind(styles);

const Booting = () => {
  const [appleClass, setAppleClass] = useState('');
  const [bar, setBar] = useState('');
  const [whiteBar, setwhiteBar] = useState('');
  const {
    state: { main },
    actions: { setMain },
  } = useContext(Context);

  // 0.5초 후에 애플 로고 보이기
  useEffect(() => {
    const appleVisible = setTimeout(() => {
      setAppleClass('visible');
    }, 500);
    return () => clearTimeout(appleVisible);
  }, []);
  // 0.5초 후에 빈 바 등장
  useEffect(() => {
    const barVisible = setTimeout(() => {
      setBar('visible');
    }, 500);
    return () => clearTimeout(barVisible);
  }, []);
  // 0.5초 후에 3초간 바 채워지기 시작
  useEffect(() => {
    const whiteBarVisible = setTimeout(() => {
      setwhiteBar('visible');
    }, 500);
    return () => clearTimeout(whiteBarVisible);
  }, []);
  // 3.5초 후에 부팅 사라지고 메인 등장
  useEffect(() => {
    const change = setTimeout(() => {
      setMain(true)
    }, 3500);
    return () => clearTimeout(change);
  }, []);

  return (
    <div className={cx('booting')}>
      <div>
        <div className={cx(`apple-box`, appleClass)}>
          <img className={cx('basic-img')} src={apple} alt="apple"></img>
        </div>
        <div className={cx(`bar-empty`, bar)}>
          <div className={cx(`bar-fill`, whiteBar)}></div>
        </div>
      </div>
    </div>
  );
};

export default Booting;
