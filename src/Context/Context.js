import { createContext, useState } from "react";

const state = {
  main: true, // 부팅 화면에서 메인 화면으로 넘어가기
  modal: false, // 모달 창 클릭과 취소
  music: { // 뮤직앱에서 재생/멈춤과 다음/이전노래 등에 사용, 
    index: 0,
    play: null,
  },
  stopMusic: false, // 재생중에 모달 클릭하면 노래 멈추고 모달 취소하면 다시 노래 재생
  iconRelated: {
    music: {
      appClosed: false,
      iconClicked: false,
    },
    sticker: {
      appClosed: false,
      iconClicked: false,
    }
  }
};

const actions = {
  setModal: () => {},
  setMain: () => {},
  setMusic: () => {},
  setStopMusic: () => {},
  setIconRelated: () => {},
};

const Context = createContext({
  state,
  actions,
});

const Provider = ({children}) => {
  const [main, setMain] = useState(true);
  const [modal, setModal] = useState(false);
  const [music, setMusic] = useState({
    index: 0,
    play: null,
  });
  const [stopMusic, setStopMusic] = useState(false);
  const [iconRelated, setIconRelated] = useState({
    music: {
      appClosed: false,
      iconClicked: false,
    },
    sticker: {
      appClosed: false,
      iconClicked: false,
    }
  });
  const value = {
    state: { modal, main, music, stopMusic, iconRelated },
    actions: { setModal, setMain, setMusic, setStopMusic, setIconRelated }
  };
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
};


export { Provider, Context };
