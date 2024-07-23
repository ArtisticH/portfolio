import apple from '../Img/apple.png';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../Css/Booting.module.css';

const cx = classNames.bind(styles);

const Booting = () => {
  // const [appleClass, setAppleClass] = useState('');
  // const [bar, setBar] = useState('');
  // const [whiteBar, setwhiteBar] = useState('');
  // const [none, setNone] = useState('');
  // // 0.5초 후에 애플 로고 보이기
  // useEffect(() => {
  //   const appleVisible = setTimeout(() => {
  //     setAppleClass('visible');
  //   }, 500);
  //   return () => clearTimeout(appleVisible);
  // }, []);
  // // 0.5초 후에 빈 바 등장
  // useEffect(() => {
  //   const barVisible = setTimeout(() => {
  //     setBar('visible');
  //   }, 500);
  //   return () => clearTimeout(barVisible);
  // }, []);
  // // 0.5초 후에 3초간 바 채워지기 시작
  // useEffect(() => {
  //   const whiteBarVisible = setTimeout(() => {
  //     setwhiteBar('visible');
  //   }, 500);
  //   return () => clearTimeout(whiteBarVisible);
  // }, []);
  // // 3.5초 후에 부팅 사라지고 메인 등장
  // useEffect(() => {
  //   const change = setTimeout(() => {
  //     setNone('none');
  //     setDisplay('visible');
  //   }, 3500);
  //   return () => clearTimeout(change);
  // }, []);  
  // {cx('', '')}

  return (
    // <div>
    //   <section className={cx('booting', { visible })}>
    //     <div>
    //       <div className={`apple-box ${appleClass}`}>
    //         <img className="basic-img" src={apple} alt="apple"></img>
    //       </div>
    //       <div className={`bar-empty ${bar}`}>
    //         <div className={`bar-fill ${whiteBar}`}></div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <section className={cx('booting')}>
      <div>
        <div className={cx('apple-box')}>
          <img className="basic-img" src={apple} alt="apple"></img>
        </div>
        <div className={cx('bar-empty')}>
          <div className={cx('bar-fill')}></div>
        </div>
      </div>
    </section>
  );
};

export default Booting;

