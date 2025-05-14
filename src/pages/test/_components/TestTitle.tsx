import TestIcon from '@/assets/icons/test.svg';

export default function TestTitle() {
  return (
    <h1 className="flex gap-4 items-center pl-4 pb-2">
      <img src={TestIcon} alt="project icon" />
      <span className="font-bm text-20">테스트 관리</span>
    </h1>
  );
}
