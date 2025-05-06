import { ROUTES } from '@/constants';
import dashboardIcon from '@/assets/icons/dashboard.svg';
import projectIcon from '@/assets/icons/project.svg';
import testIcon from '@/assets/icons/test.svg';
import settingIcon from '@/assets/icons/setting.svg';
import tutorialIcon from '@/assets/icons/tutorial.svg';
import plusIcon from '@/assets/icons/plus.svg';

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
    icon: dashboardIcon,
    title: 'DASHBOARD',
    alt: 'dashboard'
  },
  {
    id: 'project-management',
    path: ROUTES.PROJECTS,
    icon: projectIcon,
    title: '프로젝트 관리',
    alt: 'manage project'
  },
  {
    id: 'test-management',
    path: ROUTES.TESTS,
    icon: testIcon,
    title: '테스트 관리',
    alt: 'manage test'
  },
  {
    id: 'settings',
    path: ROUTES.SETTINGS,
    icon: settingIcon,
    title: '설정',
    alt: 'setting'
  },
  {
    id: 'tutorial',
    path: ROUTES.MANUAL,
    icon: tutorialIcon,
    title: '튜토리얼',
    alt: 'manual'
  }
];

export const topMenuItem: MenuItemType = {
  id: 'new-project',
  path: ROUTES.NEW_PROJECT,
  icon: plusIcon,
  title: '새 프로젝트 생성',
  alt: 'generate project'
};
