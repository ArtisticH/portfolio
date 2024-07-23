import React from 'react';
import Folder from './Folder';

const FolderBox = () => {
  const style = {
    padding: '20px 0 0 20px',
    display: 'grid',
    width: 'fit-content',
    gap: '20px',  
  }
  return (
    <div style={style}>
      <Folder />
      <Folder />
      <Folder />
    </div>
  );
};

export default FolderBox;