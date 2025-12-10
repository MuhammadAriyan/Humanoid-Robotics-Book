import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Ary-s-Physical-Humanoid-Robotics/markdown-page',
    component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/markdown-page', 'c41'),
    exact: true
  },
  {
    path: '/Ary-s-Physical-Humanoid-Robotics/docs',
    component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs', '89a'),
    routes: [
      {
        path: '/Ary-s-Physical-Humanoid-Robotics/docs',
        component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs', '004'),
        routes: [
          {
            path: '/Ary-s-Physical-Humanoid-Robotics/docs',
            component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs', '962'),
            routes: [
              {
                path: '/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/actuators-and-movement',
                component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/actuators-and-movement', '715'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/control-systems',
                component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/control-systems', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/introduction-to-humanoid-robotics',
                component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/introduction-to-humanoid-robotics', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/path-planning-and-navigation',
                component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/path-planning-and-navigation', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/sensors-and-perception',
                component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/sensors-and-perception', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/textbook-outline',
                component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/docs/humanoid-robotics-course/textbook-outline', '83d'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Ary-s-Physical-Humanoid-Robotics/',
    component: ComponentCreator('/Ary-s-Physical-Humanoid-Robotics/', 'd83'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
