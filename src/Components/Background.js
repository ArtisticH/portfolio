import React from 'react';
import backImg  from '../Img/background.png'
import Center from './Center/Center';

const Background = () => {
  const style = {
    height: 'calc(100vh - 25px)',
    backgroundImage: `url(${backImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '70vw',
    backgroundPosition: 'center',  
  };
  return (
    <div style={style}>
      <Center />
    </div>
  );
};

export default Background;