import React from 'react';
import Folder from './Folder';

const FolderBox = () => {
  const folders = ['Book Club', `Spotify
  Design`, 'Intro'];
  const style = {
    padding: '20px 0 0 20px',
    display: 'grid',
    width: 'fit-content',
    gap: '20px',  
  }
  return (
    <div style={style}>
      {folders.map(folder => 
        <Folder key={folder} title={folder}/>
      )}
    </div>
  );
};

export default FolderBox;