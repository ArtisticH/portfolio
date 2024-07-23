import React, { useState, useEffect, useContext, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Nav/Date.module.css';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const DateTime = () => {
  const { actions: { setModal } } = useContext(Context);
  const onClick = useCallback((e) => {
    setModal(clicked => !clicked);
  }, []);

  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const dayNames = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const ampm = hours >= 12 ? '오후' : '오전'; // 12는 오후 12시, 23는 오후 11시, 0은 오전12시
  const formattedHours = (hours % 12 === 0) ? 12 : (hours % 12); // 0이면 12로.. 오후 12시와 오전 12시의 경우

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setMonth(now.getMonth());
      setDate(now.getDate());
      setDay(now.getDay());
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx('datetime')} onClick={onClick}>
      <div>{`${month + 1}월 ${date}일 ${dayNames[day]}`}</div>
      <div className={cx('time')}>{`${ampm} ${formattedHours} : ${formattedMinutes}`}</div>
    </div>
  );
};

export default DateTime;


