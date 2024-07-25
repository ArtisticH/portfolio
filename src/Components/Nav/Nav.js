import React, { useCallback, useContext } from 'react';
import { Left, Right } from './Sides';
import { Context } from '../../Context/Context';
import { produce } from 'immer';

const Nav = () => {
  const { state: { currentList }, actions: { setCurrentList }} = useContext(Context);
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '25px',
    padding: '0 7px',
    margin: '0',  
  };
  const PointerOver = useCallback((e) => {
    const List = e.target.closest('[data-list]');
    if(!List && currentList.clicked) {
      // 클릭된 상태에서 리스트가 아닌 다른 영역을 갔다면 없앤다.
      setCurrentList(
        produce(draft => {
          draft.clicked = false;
          draft.target = null;
          draft.ul = null;
        })
      );
    } else if (List && currentList.clicked) {
      setCurrentList(
        produce(draft => {
          draft.target = List;
          draft.ul = List.lastElementChild;
        })
      );
      // 클릭된 상태에서 리스트 영역을 가면 그 리스트를 바로 밑의 UL을 보여준다.
    }
  }, [currentList])
  return (
    <div style={style} onPointerOver={PointerOver}>
      <Left />
      <Right />
    </div>
  );
};

export default Nav;