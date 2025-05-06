import settingIcon from '@/assets/icons/setting.svg';
import { useNavigate } from 'react-router-dom';
import SettingCard from '@/pages/setting/_components/SettingCard';
import { SettingCardProps, settingItem } from '@/pages/setting/_components/SettingCardData';

export default function SettingPage() {
  const navigate = useNavigate();

  const handleCardClick = (item: SettingCardProps) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.id === 'delete') {
      // TODO: 계정 삭제 모달 오픈 및 처리 로직 작성
      console.log('계정삭제');
    }
  };
  return (
    <div className="space-y-8 w-[90%]">
      <div className="flex items-center gap-3 pl-12">
        <img src={settingIcon} alt="setting icon" />
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
