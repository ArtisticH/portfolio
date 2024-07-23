import React, { useContext} from 'react';
import Booting from './Components/Booting';
import Main from './Components/Main';
import { Provider, Context } from './Context/Context';

function App() {
  const { state: { mainVisible } } = useContext(Context);
  return (
    <Provider>
      <>
        { !mainVisible && <Booting/>}
        { mainVisible && <Main/>}
      </>
    </Provider>
  );
}

export default App;
