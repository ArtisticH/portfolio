import { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '../Context/Context';
import { produce } from 'immer';

export const useBtns = (prop) => {
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
        draft[prop].red.clicked = true;
      })
    );
  }, []);
  useEffect(() => {
    if(btn[prop].red.clicked) {
      setRed(true);
    }
  }, [btn[prop].red]);
  // 상단바만 남기기, 상태 변경 => useEffect => 클래스로 인한 CSS변화
  // 노란 버튼 클릭시 초록색 비활성화 해야돼,
  const clickYellow = useCallback(() => {
    if(yellowBan) return;
    setBtn(
      produce((draft) => {
        draft[prop].yellow.clicked = !draft[prop].yellow.clicked;
        draft[prop].green.banned = draft[prop].yellow.clicked;
      })
    );
  }, [yellowBan]);
  // 업데이트
  useEffect(() => {
    setYellow(btn[prop].yellow.clicked);
    setGreenBan(btn[prop].green.banned);
  }, [btn[prop].yellow]); 
  // 초록 버튼
  const clickGreen = useCallback(() => {
    if(greenBan) return;
    setBtn(
      produce((draft) => {
        draft[prop].green.clicked = !draft[prop].green.clicked; 
        draft[prop].yellow.banned = draft[prop].green.clicked;
      })
    );
  }, [greenBan]);
  // 업데이트
  useEffect(() => {
    setGreen(btn[prop].green.clicked);
    setYellowBan(btn[prop].yellow.banned);
  }, [btn[prop].green]);   
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