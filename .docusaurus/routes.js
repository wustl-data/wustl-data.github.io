import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/', '203'),
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
        component: ComponentCreator('/environment/initial_setup', '50f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/initial_setup',
        component: ComponentCreator('/environment/initial_setup', '16e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/initial_setup/container-or-manual',
        component: ComponentCreator('/environment/initial_setup/container-or-manual', '388'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/initial_setup/container-or-manual/devcontainer',
        component: ComponentCreator('/environment/initial_setup/container-or-manual/devcontainer', '6bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/initial_setup/container-or-manual/manual',
        component: ComponentCreator('/environment/initial_setup/container-or-manual/manual', '769'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/tech_stack/container-or-manual',
        component: ComponentCreator('/environment/tech_stack/container-or-manual', 'ed9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/tech_stack/container-or-manual/devcontainer',
        component: ComponentCreator('/environment/tech_stack/container-or-manual/devcontainer', '882'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/environment/tech_stack/container-or-manual/manual',
        component: ComponentCreator('/environment/tech_stack/container-or-manual/manual', '0d8'),
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
