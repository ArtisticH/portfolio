import React from 'react';
import File from './File';

const FileBox = () => {
  return (
    <div class="file" hidden>
    <div class="file-nav" data-dblclick="green">
      <div class="file-title">Book Club</div>
      <div class="file-btns">
        <div class="btn-red" data-click="red"></div>
        <div class="btn-yellow" data-click="yellow" data-clicked="false" data-disabled="false"></div>
        <div class="btn-green" data-click="green" data-clicked="false" data-disabled="false"></div>
      </div>  
    </div>
    <div class="file-main">
      <File />
      <File />
      <div></div>
      <File />
      <File />
      <File />
    </div>
  </div>
  );
};

export default FileBox;