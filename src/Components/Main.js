import React, { useContext } from 'react';
import Nav from './Nav/Nav';
import Background from './Background';
import Modal from './Modal';
import { Context } from '../Context/Context';

const Main = () => {
  const style = {
    height: '100vh',
  };
  // 모달 클릭시에는 모달 창 보여주기
  const { state: { modal } } = useContext(Context);
  return (
    <div style={style}>
      <Nav />
      <Background />
      { modal && <Modal />}
    </div>
  );
};

export default Main;