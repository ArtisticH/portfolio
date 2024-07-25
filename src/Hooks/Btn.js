import { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '../Context/Context';
import { produce } from 'immer';

export const useBtns = (type, prop) => {
  const {
    state: { btn, browser },
    actions: { setBtn },
  } = useContext(Context);
  // 레드 버튼을 클릭했을때
  // CSS에서 요소.red는 display: none;를 의미, 사라진다.
  // 클래스 이름 { red: boolean }을 통해 구현
  const [red, setRed] = useState(false); 
  const [yellow, setYellow] = useState(false); 
  const [green, setGreen] = useState(false); 
  const [greenBan, setGreenBan] = useState(false); 
  const [yellowBan, setYellowBan] = useState(false); 
  // useEffect로 업데이트된 상태 캐치
  // setInvisible(gifBtn.#.red); 즉, 참 값으로 변경해 클래스에서 display: none;을 활성화시킨다.
  const clickRed = useCallback(() => {
    setBtn(
      produce((draft) => {
        draft[type][prop].red.clicked = true;
      })
    );
  }, []);
  useEffect(() => {
    if(btn[type][prop].red.clicked) {
      setRed(true);
    } else { // 폴더 더블클릭으로 btn[type][prop].red.clicked = false로 지정하면 창이 열린다.
      setRed(false);
    }
  }, [btn[type][prop].red]);
  // 상단바만 남기기, 상태 변경 => useEffect => 클래스로 인한 CSS변화
  // 노란 버튼 클릭시 초록색 비활성화 해야돼,
  const clickYellow = useCallback(() => {
    if(yellowBan) return;
    setBtn(
      produce((draft) => {
        draft[type][prop].yellow.clicked = !draft[type][prop].yellow.clicked;
        draft[type][prop].green.banned = draft[type][prop].yellow.clicked;
      })
    );
  }, [yellowBan]);
  // 업데이트
  useEffect(() => {
    setYellow(btn[type][prop].yellow.clicked);
    setGreenBan(btn[type][prop].green.banned);
  }, [btn[type][prop].yellow]); 
  // 초록 버튼
  const clickGreen = useCallback(() => {
    if(greenBan) return;
    setBtn(
      produce((draft) => {
        draft[type][prop].green.clicked = !draft[type][prop].green.clicked; 
        draft[type][prop].yellow.banned = draft[type][prop].green.clicked;
      })
    );
  }, [greenBan]);
  // 업데이트
  useEffect(() => {
    setGreen(btn[type][prop].green.clicked);
    setYellowBan(btn[type][prop].yellow.banned);
  }, [btn[type][prop].green]);   
  const greenStyle = {
    width: browser.width,
    height: browser.height,
    top: '0',
    left: '0',
  };
  return {
    red, 
    clickRed,
    yellow,
    clickYellow,
    green,
    clickGreen,
    yellowBan,
    greenBan,
    greenStyle,
  }
}