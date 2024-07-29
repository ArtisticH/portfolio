import React from 'react';
import Icon from './Icon';
import DateTime from './DateTime';
import Imgs from '../../Img/Nav';
import { List, Types, Type, Versions, Version, Ways, Way } from './List';

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
  'TYPESCRIPT',
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
const versions = [
  [
    // BOOK CLUB
    {
      title: 'Vanilla',
      href: '',
    },
    {
      title: 'React(Redux) + Typescript',
      href: '',
    },
  ],
  [
    // SPOTIFY
    {
      title: 'Vanilla',
      href: '',
    },
  ],
  [
    // INTRO
    {
      title: 'Vanilla',
      href: '',
    },
    {
      title: 'React(Context API) + Typescript',
      href: '',
    },
  ],
];
const ways = [
  [
    // BOOK CLUB
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
        href: '',
      },
      {
        title: 'SITE',
        href: '',
      },
    ],
  ],
  [
    // SPOTIFY
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
  ],
  [
    // INTRO
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
        href: '',
      },
      {
        title: 'SITE',
        href: '',
      },
    ],
  ],
];

const Left = () => {
  return (
    <div style={style}>
      <Icon dir="left" icon="apple" src={left['apple']} />
      <List title="PORTFOLIO">
        <Types>
          {portfolios.map((pf, i) => (
            <Type key={pf.title} li={pf} arrow={true}>
              <Versions>
                {versions[i].map((version, index) => (
                  <Version key={version.title} li={version} arrow={true}>
                    <Ways width="ways">
                      {ways[i][index].map((way) => (
                        <Way key={way.title} li={way} arrow={false} />
                      ))}
                    </Ways>
                  </Version>
                ))}
              </Versions>
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
