import settingIcon from '@/assets/icons/setting.svg';

export default function SettingTitle() {
  return (
    <div className="flex items-center gap-3 pl-12 pb-3">
      <div>
        <img src={settingIcon} alt="setting icon" />
      </div>
      <p className="font-bm text-20">설정</p>
    </div>
  );
}
