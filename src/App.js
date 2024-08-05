import React, { useContext } from 'react';
import Booting from './Components/Booting';
import Main from './Components/Main';
import { Context } from './Context/Context';
// main의 초기값은 false, 그래서 부팅화면 보여주고 메인 화면 숨긴다. 
// true로 바뀌면 부팅화면 사라지고 메인화면 등장

function App() {
  const { state: { main } } = useContext(Context);
  return (
      <>
        { !main && <Booting/>}
        { main && <Main/>}
      </>
  );
}

export default App;
