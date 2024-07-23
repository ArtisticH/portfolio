import React from 'react';
import '../../Css/Center/Folder.css';
import folder from '../../Img/folder.png'

const Folder = () => {
  return (
    <div className="folder">
    <div className="icon">
      <img className="basic-img" src={folder} alt="folder" />
    </div>
    <div className="name"></div>
  </div>
  );
};

export default Folder;