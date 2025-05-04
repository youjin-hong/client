import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';

export function DashboardPage() {
  return (
    <>
      <h1 className="font-bm">
        대시보드(홈)페이지 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perferendis optio minus
        iusto, voluptas quia nemo repellat dolores ut iure, numquam amet labore quod inventore laboriosam sint iste
        tempora error.
      </h1>
      <Button text="버튼" onClick={() => console.log('클릭')} />
      <Input
        label="이름"
        placeholder="이름을 입력"
        onChange={() => console.log('입력했다')}
        onEnterPress={() => console.log('엔터')}
        required
      />
    </>
  );
}
