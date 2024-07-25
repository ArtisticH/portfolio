import React, { useCallback, useContext } from 'react';
import { Context } from '../Context/Context';
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
  const { actions: { setCurrentFolder }} = useContext(Context);

  const Click = useCallback((e) => {
    // 폴더를 선택하고 빈 공간을 선택하는 경우 폴더 배경 효과 삭제
    const folder = e.target.closest('[data-folder]');
    if(!folder) {
      setCurrentFolder(null);
    }    
  });

  return (
    <div style={style} onClick={Click}>
      <Center />
      <Footer />
    </div>
  );
};

export default Background;