import React from 'react';
import Icon from './Icon';
import DateTime from './DateTime';
import Imgs from '../../Img/Nav'
import { List, Ul, Lis, Versions } from './List';

const { left, right } = Imgs;
const style = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const icons = ['play', 'bluetooth', 'battery', 'wifi', 'siri'];
const skill = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT(REDUX)', 'TYPESCRIPT', 'NODE.JS', 'MYSQL', 'GIT'];
const nothingHref = '#';
const skills = [];
for(let elem of skill) {
  skills[skills.length] = {
    title: elem,
    href: nothingHref
  }
}
const portfolio = ['BOOK CLUB', 'SPOTIFY DESIGN', 'INTRO'];
const portfolios = [];
for(let elem of portfolio) {
  portfolios[portfolios.length] = {
    title: elem,
    href: nothingHref
  }
}
const versions = [
  [ // BOOK CLUB
    {
      title: 'Vanilla',
      href: ''
    },
    {
      title: 'React + Redux + Typescript',
      href: ''
    }
  ],
  [ // SPOTIFY
    {
      title: 'Vanilla',
      href: ''
    },
    {
      title: 'React + Typescript',
      href: ''
    }
  ],
  [ // INTRO
    {
      title: 'Vanilla',
      href: ''
    },
    {
      title: 'React + Typescript',
      href: ''
    }
  ]
];
const ways = [
  [ // BOOK CLUB
    [
      {
        title: 'GITHUB',
        href: ''
      },
      {
        title: 'SITE',
        href: ''
      }  
    ],
    [
      {
        title: 'GITHUB',
        href: ''
      },
      {
        title: 'SITE',
        href: ''
      }  
    ],
  ],
  [ // SPOTIFY
    [
      {
        title: 'GITHUB',
        href: ''
      },
      {
        title: 'SITE',
        href: ''
      }  
    ],
    [
      {
        title: 'GITHUB',
        href: ''
      },
      {
        title: 'SITE',
        href: ''
      }  
    ],
  ],
  [ // INTRO
    [
      {
        title: 'GITHUB',
        href: ''
      },
      {
        title: 'SITE',
        href: ''
      }  
    ],
    [
      {
        title: 'GITHUB',
        href: ''
      },
      {
        title: 'SITE',
        href: ''
      }  
    ],
  ],
]

const Left = () => {
  return (
    <div style={style}>
      <Icon dir='left' icon='apple' src={left['apple']}/>
      <List title='PORTFOLIO'>
        <Ul>
            {portfolios.map((pf, i) => 
              <Lis key={pf.title} li={pf} arrow={true}>
                <Versions>
                  {versions[i].map((version, index) => 
                    <Lis key={version.title} li={version} arrow={true}>
                      <Ul width='ways'>
                        {ways[i][index].map(way => 
                          <Lis key={way.title} li={way} arrow={false}/>
                        )}
                      </Ul>
                    </Lis>
                  )}
                </Versions>
              </Lis>
            )}
          </Ul>
      </List>
      <List title='SKILLS'>
        <Ul>
          {skills.map(skill => 
            <Lis key={skill.title} li={skill} arrow={false}/>
          )}
        </Ul>
      </List>
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