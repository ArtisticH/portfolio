import React from 'react';
import { Left, Right } from './Sides';

const Nav = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '25px',
    padding: '0 7px',
    margin: '0',  
  };
  return (
    <div style={style}>
      <Left />
      <Right />
    </div>
  );
};

export default Nav;