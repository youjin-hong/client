interface SettingItemProps {
  title: string;
  onClick?: () => void;
}

export default function SettingCard({ title, onClick }: SettingItemProps) {
  return (
    <div
      onClick={onClick}
      className="w-[90%] rounded-20 py-5 px-7 cursor-pointer shadow-[0_0_3px_2px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors">
      <p className="font-medium text-20">{title}</p>
    </div>
  );
}
