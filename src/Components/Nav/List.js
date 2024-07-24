import React from 'react';
import styles from '../../Css/Nav/List.module.css';
import classNames from 'classnames/bind';
import Imgs from '../../Img/Nav';

const cx = classNames.bind(styles);

const Lis = ({ li, arrow, children }) => {
  return (
    <li className={cx('li')}>
      <a className={cx('li-title')} href={li.href} target="_blank">{li.title}</a>
      { arrow && 
        <div className={cx('arrow')}>
          <img className="basic-img" src={Imgs.left.arrow} alt="arrow"/>
        </div>      
      }
      {children}
    </li>
  );
};

const Ul = ({ children, width }) => {
  return (
    <ul className={cx('ul', width)}>{children}</ul>
  );
};

const List = ({ title, children }) => {
  return (
    <div className={cx('elem')}>
      <div className={cx('elem-title')}>{title}</div>
      {children}
    </div>
  );
};

export { List, Ul, Lis };