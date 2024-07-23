import { createContext, useState } from "react";

const state = {
  mainVisible: true,
  modalClicked: false,
};

const actions = {
  setModal: () => {},
};

const Context = createContext({
  state,
  actions,
});

const Provider = ({children}) => {
  const [mainVisible, setMain] = useState(true);
  const [modalClicked, setModal] = useState(false);

  const value = {
    state: { modalClicked, mainVisible },
    actions: { setModal, setMain }
  };
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
};


export { Provider, Context };
