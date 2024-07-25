import { useCallback, useState, useContext } from 'react';
import { Context } from '../Context/Context';
import { produce } from 'immer';

export const useClose = (prop, func) => {
  const [invisible, setInvisible] = useState(false); // 창닫기
  const {
    actions: { setIconRelated },
  } = useContext(Context);
  const clickClose = useCallback(() => {
    setInvisible(true); // 창닫기
    // Application에서 사용
    // appClosed = true되면 서클 사라지고, 더블클릭의 조건이 된다.
    // 더블클릭시 iconClicked = true를 만들어 애니메이션 활성화시키고
    // 이걸 계속 반복하기 위해 닫을때 iconClicked = false를 만든다.
    setIconRelated(
      produce((draft) => {
        draft[prop].appClosed = true;
        draft[prop].iconClicked = false;
      })
    );  
    if(func) func();
  }, [])
  return {
    clickClose,
    invisible,
    setInvisible,
  }
}