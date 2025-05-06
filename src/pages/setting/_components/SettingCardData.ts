import { ROUTES } from '@/constants';

export interface SettingCardProps {
  id: string;
  title: string;
  path?: string;
}

export const settingItem = [
  {
    id: 'profile',
    title: 'Edit Profile Info',
    path: ROUTES.PROFILE
  },
  {
    id: 'password',
    title: 'Change Password',
    path: ROUTES.PROFILE // TODO: api 개발되면 라우팅도 추가할 것
  },
  {
    id: 'delete',
    title: 'Delete Account'
  },
  {
    id: 'help',
    title: 'Help',
    path: ROUTES.PROFILE // TODO: 디자인 시안 나오면 라우팅 추가할 것
  }
];
