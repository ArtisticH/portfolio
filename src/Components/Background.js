import React from 'react';
import backImg  from '../Img/background.png'
import Center from './Center/Center';
import Footer from './Footer/Footer';

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
      <Footer />
    </div>
  );
};

export default Background;