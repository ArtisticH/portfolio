import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Css/Nav/Icon.module.css';
import { Context } from '../../Context/Context';

const cx = classNames.bind(styles);

const Icon = ({ dir, icon, src }) => {
  const { actions: { setModal }} = useContext(Context);
  const ModalChange = useCallback(() => {
    setModal(clicked => !clicked);
  }, []);

  return (
    <div className={cx('elem', dir)} onClick={ModalChange}>
      <img className={cx('icon', icon)} src={src} alt=''/>
    </div>
  );
};

export default Icon;