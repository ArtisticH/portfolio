import React, { useContext } from 'react';
import Nav from './Nav/Nav';
import Background from './Background';
import Modal from './Modal';
import { Context } from '../Context/Context';

const Main = () => {
  const style = {
    height: '100vh',
  };
  const { state } = useContext(Context);
  return (
    <div style={style}>
      <Nav />
      <Background />
      { state.modalClicked && <Modal />}
    </div>
  );
};

export default Main;