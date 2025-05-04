import { ROUTES } from '@/constants';

export interface MenuItemType {
  id: string;
  path: string;
  icon: string;
  title: string;
  alt: string;
}

export const menuItems: MenuItemType[] = [
  {
    id: 'dashboard',
    path: ROUTES.HOME,
    icon: '/src/assets/icons/dashboard.svg',
    title: 'DASHBOARD',
    alt: 'dashboard'
  },
  {
    id: 'project-management',
    path: ROUTES.PROFILE,
    icon: '/src/assets/icons/project.svg',
    title: '프로젝트 관리',
    alt: 'manage project'
  },
  {
    id: 'test-management',
    path: ROUTES.TESTS,
    icon: '/src/assets/icons/test.svg',
    title: '테스트 관리',
    alt: 'manage test'
  },
  {
    id: 'settings',
    path: ROUTES.SETTINGS,
    icon: '/src/assets/icons/setting.svg',
    title: '설정',
    alt: 'setting'
  },
  {
    id: 'tutorial',
    path: ROUTES.MANUAL,
    icon: '/src/assets/icons/tutorial.svg',
    title: '튜토리얼',
    alt: 'manual'
  }
];

export const topMenuItem: MenuItemType = {
  id: 'new-project',
  path: ROUTES.NEW_PROJECT,
  icon: '/src/assets/icons/plus.svg',
  title: '새 프로젝트 생성',
  alt: 'generate project'
};
