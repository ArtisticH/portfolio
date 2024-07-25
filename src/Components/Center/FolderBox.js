import React from 'react';
import Folder from './Folder';

const FolderBox = () => {
  const folders = [{
    title: 'Book Club',
    prop: 'bookclub'
  },
  {
    title: 'Spotify Design',
    prop: 'spotify'
  },
  {
    title: 'Intro',
    prop: 'intro'
  }];

  const style = {
    padding: '20px 0 0 20px',
    display: 'grid',
    width: 'fit-content',
    gap: '20px',  
  }
  return (
    <div style={style}>
      {folders.map(folder => 
        <Folder key={folder.prop} folder={folder}/>
      )}
    </div>
  );
};

export default FolderBox;