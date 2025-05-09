import Button from '@/components/ui/button/Button';
import LinearProgressBar from '@/components/ui/progressBar/LinearProgressBar';

export default function TestListItem() {
  return (
    <div className="border shadow-custom rounded-10 pt-5 px-6 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="w-[15px] h-[15px] rounded-full bg-[#9991F4]"></span>
          <p className="font-semibold text-16">테스트 프로젝트 이름</p>
        </div>
        <p className="font-medium text-11 text-typography-gray">2025.03.27</p>
      </div>
      <ul className="space-y-4 py-2">
        <li className="space-y-1">
          <p className="font-semibold text-11">라우팅 테스트</p>
          <LinearProgressBar value="80" color="bg-teal_1" />
        </li>
        <li className="space-y-1">
          <p className="font-semibold text-11">인터랙션 테스트</p>
          <LinearProgressBar value="80" color="bg-purple_1" />
        </li>
        <li className="space-y-1">
          <p className="font-semibold text-11">컴포넌트 테스트</p>
          <LinearProgressBar value="80" color="bg-brown_1" />
        </li>
      </ul>
      <p className="font-medium text-11 text-typography-gray py-2">총 테스트 17/22 통과</p>
      <Button text="등록" className="w-full" />
    </div>
  );
}
