interface ProjectInfoItemProps {
  label: string;
  value: string;
}

export default function ProjectInfoItem({ label, value }: ProjectInfoItemProps) {
  return (
    <div className="flex gap-[5px]">
      <span className="font-medium text-11 text-typography-dark max-xl2:w-[70px]">{label}</span>
      <span className="font-medium text-11 text-typography-gray">{value}</span>
    </div>
  );
}
