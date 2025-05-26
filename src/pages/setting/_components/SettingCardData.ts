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
    path: ROUTES.PASSWORD
  },
  {
    id: 'delete',
    title: 'Delete Account'
  },
  {
    id: 'help',
    title: 'Help',
    path: 'https://www.google.com'
  }
];
