import React from 'react';
import Icon from './Icon';
import DateTime from './DateTime';
import Imgs from '../../Img/Nav';
import { List, Types, Type, Ways, Way } from './List';

const { left, right } = Imgs;
const style = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const icons = ['play', 'bluetooth', 'battery', 'wifi', 'siri'];
const skill = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT(REDUX)',
  'NODE.JS',
  'MYSQL',
  'GIT',
];
const nothingHref = '#';
const skills = [];
for (let elem of skill) {
  skills[skills.length] = {
    title: elem,
    href: nothingHref,
  };
}
const portfolio = ['BOOK CLUB', 'SPOTIFY DESIGN', 'INTRO'];
const portfolios = [];
for (let elem of portfolio) {
  portfolios[portfolios.length] = {
    title: elem,
    href: nothingHref,
  };
}
const ways = [
  [
    {
      title: 'GITHUB',
      href: '',
    },
    {
      title: 'SITE',
      href: '',
    },  
  ],
  [
    {
      title: 'GITHUB',
      href: 'https://github.com/ArtisticH/spotify',
    },
    {
      title: 'SITE',
      href: 'https://artistich.github.io/spotify/',
    },  
  ],
  [  {
    title: 'GITHUB',
    href: 'https://github.com/ArtisticH/portfolio',
  },
  {
    title: 'SITE',
    href: 'https://artistich.github.io/portfolio/',
  },
  ]
];

const Left = () => {
  return (
    <div style={style}>
      <Icon dir="left" icon="apple" src={left['apple']} />
      <List title="PORTFOLIO">
        <Types>
          {portfolios.map((pf, i) => (
            <Type key={pf.title} li={pf} arrow={true}>
              <Ways width="ways">
                {ways[i].map((way, index) => (
                  <Way key={index} li={way} arrow={false} />
                ))}
              </Ways>
            </Type>
          ))}
        </Types>
      </List>
      <List title="SKILLS">
        <Types>
          {skills.map((skill) => (
            <Type key={skill.title} li={skill} arrow={false} />
          ))}
        </Types>
      </List>
    </div>
  );
};

const Right = () => {
  return (
    <div style={style}>
      {icons.map((icon) => (
        <Icon key={icon} dir="right" icon={icon} src={right[icon]} />
      ))}
      <DateTime />
    </div>
  );
};

export { Left, Right };
