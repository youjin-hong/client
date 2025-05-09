import { useNavigate } from 'react-router-dom';
import SettingCard from '@/pages/setting/_components/SettingCard';
import { SettingCardProps, settingItem } from '@/pages/setting/_components/SettingCardData';
import SettingTitle from '@/pages/setting/_components/SettingTitle';

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
      <SettingTitle />
      <div className="space-y-10">
        {settingItem.map((item) => (
          <SettingCard key={item.id} title={item.title} onClick={() => handleCardClick(item)} />
        ))}
      </div>
    </div>
  );
}
