interface ProjectInfoItemProps {
  label: string;
  value: string;
}

export default function ProjectInfoItem({ label, value }: ProjectInfoItemProps) {
  return (
    <div className="flex gap-[5px]">
      <span className="font-medium text-11 text-typography-dark">{label}</span>
      <span className="font-medium text-11 text-typography-gray">{value}</span>
    </div>
  );
}
