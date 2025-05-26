import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SettingCard from '@/pages/setting/_components/SettingCard';
import { SettingCardProps, settingItem } from '@/pages/setting/_components/SettingCardData';
import SettingTitle from '@/pages/setting/_components/SettingTitle';
import DeleteAccountModal from '@/pages/setting/_components/DeleteAccountModal';
import { useDashboardHome } from '@/store/queries/dashboard/useDashboardHomeQuery';

export default function SettingPage() {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { data: dashboardData } = useDashboardHome();

  const handleCardClick = (item: SettingCardProps) => {
    if (item.path) {
      if (item.path.startsWith('http')) {
        window.open(item.path, '_blank');
      } else {
        navigate(item.path);
      }
    } else if (item.id === 'delete') {
      setIsDeleteModalOpen(true);
    }
  };

  return (
    <div className="space-y-8 w-[90%] mx-auto">
      <SettingTitle />
      <div className="space-y-10">
        {settingItem.map((item) => (
          <SettingCard key={item.id} title={item.title} onClick={() => handleCardClick(item)} />
        ))}
      </div>

      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        projectCount={dashboardData?.totalProjects || 0}
        testCount={dashboardData?.incompleteTests || 0}
      />
    </div>
  );
}
