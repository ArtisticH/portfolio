import { createContext, useState } from 'react';

const btns = {
  red: {
    clicked: false,
  },
  yellow: {
    clicked: false,
    banned: false,
  },
  green: {
    clicked: false,
    banned: false,
  },
}

const state = {
  main: false, // 부팅 화면에서 메인 화면으로 넘어가기
  modal: false, // 모달 창 클릭과 취소
  music: {
    // 뮤직앱에서 재생/멈춤과 다음/이전노래 등에 사용,
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
    },
  },
  browser: {
    width: '',
    height: '',
  },
  btn: {
    gif: {
      bookclub: {
        ...btns,
      },
      spotify: {
        ...btns,
      }
    },
    file: {
      bookclub: {
        ...btns,
      },
      spotify: {
        ...btns,
      },
      intro: {
        ...btns,
      }
    },
  },
  currentFolder: null,
  currentFile: {
    bookclub: null,
    spotify: null,
    intro: null,
  },
  currentList: {
    clicked: null,
    types: null,
    list: null,
  },
  currentType: {
    type: null,
    ways: null,
    hovered: false,
  },
};

const actions = {
  setModal: () => {},
  setMain: () => {},
  setMusic: () => {},
  setStopMusic: () => {},
  setIconRelated: () => {},
  setBrowser: () => {},
  setBtn: () => {},
  setCurrentFolder: () => {},
  setCurrentFile: () => {},
  setCurrentList: () => {},
  setCurrentType: () => {},
};

const Context = createContext({
  state,
  actions,
});

const Provider = ({ children }) => {
  const [main, setMain] = useState(false);
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
    },
  });
  const [browser, setBrowser] = useState({
    width: '', // 브라우저의 너비
    height: '', // Center의 높이
  });
  const [btn, setBtn] = useState({
    gif: {
      bookclub: {
        ...btns,
      },
      spotify: {
        ...btns,
      }
    },
    file: {
      bookclub: {
        ...btns,
      },
      spotify: {
        ...btns,
      },
      intro: {
        ...btns,
      }
    },
  });
  const [currentFolder, setCurrentFolder] = useState(null);
  const [currentFile, setCurrentFile] = useState({
    bookclub: null,
    spotify: null,
    intro: null,
  });
  const [currentList, setCurrentList] = useState({
    clicked: false,
    types: null,
    list: null,
  });
  const [currentType, setCurrentType] = useState({
    type: null,
    ways: null,
    hovered: false,
  });

  const value = {
    state: {
      modal,
      main,
      music,
      stopMusic,
      iconRelated,
      browser,
      btn,
      currentFolder,
      currentFile,
      currentList,
      currentType,
    },
    actions: {
      setModal,
      setMain,
      setMusic,
      setStopMusic,
      setIconRelated,
      setBrowser,
      setBtn,
      setCurrentFolder,
      setCurrentFile,
      setCurrentList,
      setCurrentType,
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Provider, Context };
