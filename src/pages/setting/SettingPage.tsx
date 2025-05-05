import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';
import SettingCard from '@/pages/setting/_components/SettingCard';

interface SettingCardProps {
  id: string;
  title: string;
  path?: string;
}

export default function SettingPage() {
  const navigate = useNavigate();

  const settingItem = [
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

  const handleCardClick = (item: SettingCardProps) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.id === 'delete') {
      // TODO: 계정 삭제 모달 오픈 및 처리 로직 작성
      console.log('계정삭제');
    }
  };
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 pl-12">
        <img src="/src/assets/icons/setting.svg" alt="setting icon" />
        <p className="font-bm text-20">설정</p>
      </div>
      <div className="space-y-10 pl-6 pt-2">
        {settingItem.map((item) => (
          <SettingCard key={item.id} title={item.title} onClick={() => handleCardClick(item)} />
        ))}
      </div>
    </div>
  );
}
