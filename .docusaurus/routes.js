import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2d1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '457'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '00e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '265'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'bfe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '62f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2a6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '702'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a74'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b1c'),
    routes: [
      {
        path: '/assignments',
        component: ComponentCreator('/assignments', 'd8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment',
        component: ComponentCreator('/environment', '0af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/git',
        component: ComponentCreator('/environment/git', '76e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/gradescope',
        component: ComponentCreator('/environment/gradescope', 'd49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/initial_setup',
        component: ComponentCreator('/environment/initial_setup', 'd0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/exercises',
        component: ComponentCreator('/exercises', '46c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/resources',
        component: ComponentCreator('/resources', '669'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
