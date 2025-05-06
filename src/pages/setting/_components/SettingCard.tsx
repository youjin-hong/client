interface SettingItemProps {
  title: string;
  onClick?: () => void;
}

export default function SettingCard({ title, onClick }: SettingItemProps) {
  return (
    <div
      onClick={onClick}
      className="w-full rounded-20 py-5 px-7 cursor-pointer shadow-custom hover:bg-gray-50 transition-colors">
      <p className="font-medium text-20">{title}</p>
    </div>
  );
}
