import React, { useCallback, useContext } from 'react';
import { Context } from '../../Context/Context';
import classNames from 'classnames/bind';
import styles from '../../Css/Nav/Icon.module.css';

const cx = classNames.bind(styles);

const Icon = ({ dir, icon, src }) => {
  const { actions: { setModal } } = useContext(Context);
  const onClick = useCallback((e) => {
    setModal(clicked => !clicked);
  }, []);
  return (
    <div className={cx('elem', dir)} onClick={onClick}>
      <img className={cx('icon', icon)} src={src} alt=''/>
    </div>
  );
};

export default Icon;