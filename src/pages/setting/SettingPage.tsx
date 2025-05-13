import settingIcon from '@/assets/icons/setting.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SettingCard from '@/pages/setting/_components/SettingCard';
import { SettingCardProps, settingItem } from '@/pages/setting/_components/SettingCardData';
import DeleteAccountModal from '@/pages/setting/_components/DeleteAccountModal';
import { useGetProjectList } from '@/store/queries/project/useProjectQueries';

export default function SettingPage() {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { data: projectList = [], isLoading: isProjectLoading } = useGetProjectList();

  const handleCardClick = (item: SettingCardProps) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.id === 'delete') {
      setIsDeleteModalOpen(true);
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

      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        projectCount={projectList.length}
        testCount={0}
      />
    </div>
  );
}
