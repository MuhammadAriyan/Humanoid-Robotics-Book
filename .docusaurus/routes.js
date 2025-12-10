import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Humanoid-Robotics-Book/markdown-page',
    component: ComponentCreator('/Humanoid-Robotics-Book/markdown-page', '748'),
    exact: true
  },
  {
    path: '/Humanoid-Robotics-Book/docs',
    component: ComponentCreator('/Humanoid-Robotics-Book/docs', 'f18'),
    routes: [
      {
        path: '/Humanoid-Robotics-Book/docs',
        component: ComponentCreator('/Humanoid-Robotics-Book/docs', 'a04'),
        routes: [
          {
            path: '/Humanoid-Robotics-Book/docs',
            component: ComponentCreator('/Humanoid-Robotics-Book/docs', '060'),
            routes: [
              {
                path: '/Humanoid-Robotics-Book/docs/humanoid-robotics-course/actuators-and-movement',
                component: ComponentCreator('/Humanoid-Robotics-Book/docs/humanoid-robotics-course/actuators-and-movement', '962'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Humanoid-Robotics-Book/docs/humanoid-robotics-course/control-systems',
                component: ComponentCreator('/Humanoid-Robotics-Book/docs/humanoid-robotics-course/control-systems', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Humanoid-Robotics-Book/docs/humanoid-robotics-course/introduction-to-humanoid-robotics',
                component: ComponentCreator('/Humanoid-Robotics-Book/docs/humanoid-robotics-course/introduction-to-humanoid-robotics', 'b77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Humanoid-Robotics-Book/docs/humanoid-robotics-course/path-planning-and-navigation',
                component: ComponentCreator('/Humanoid-Robotics-Book/docs/humanoid-robotics-course/path-planning-and-navigation', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Humanoid-Robotics-Book/docs/humanoid-robotics-course/sensors-and-perception',
                component: ComponentCreator('/Humanoid-Robotics-Book/docs/humanoid-robotics-course/sensors-and-perception', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Humanoid-Robotics-Book/docs/humanoid-robotics-course/textbook-outline',
                component: ComponentCreator('/Humanoid-Robotics-Book/docs/humanoid-robotics-course/textbook-outline', 'd84'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Humanoid-Robotics-Book/',
    component: ComponentCreator('/Humanoid-Robotics-Book/', '23a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
