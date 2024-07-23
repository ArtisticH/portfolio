import React from 'react';
import Icon from './Icon';
import DateTime from './DateTime';
import Imgs from '../../Img/Nav'
const { left, right } = Imgs;

const style = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const icons = ['play', 'bluetooth', 'battery', 'wifi', 'siri'];

const Left = () => {
  return (
    <div style={style}>
      <Icon dir='left' icon='apple' src={left['apple']}/>
    </div>
  );
};

const Right = () => {
  return (
    <div style={style}>
      {icons.map((icon) => (
        <Icon key={icon} dir="right" icon={icon} src={right[icon]}/>
      ))}
      <DateTime />
    </div>
  );
};

export { Left, Right };