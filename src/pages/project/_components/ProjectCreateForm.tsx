import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';

export default function ProjectCreateForm() {
  const handleChange = () => {
    console.log('input에 글자 입력');
  };

  const handleSubmitProjectCreateForm = () => {
    console.log('프로젝트생성form 제출');
  };

  return (
    <form onSubmit={handleSubmitProjectCreateForm} className="flex flex-col gap-6">
      <section className="space-y-5">
        <Input label="프로젝트명" required onChange={handleChange} />
        <Input label="프로젝트 관리자" required onChange={handleChange} />
        <Input label="테스트 예상 시작일" onChange={handleChange} />
        <Input label="프로젝트 마감일" onChange={handleChange} />
        <Input label="설명" onChange={handleChange} />
      </section>

      <section className="flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-14 text-typography-dark pl-4 py-3">디자인 소스</h2>
          <form className="border-[0.5px] border-typography-gray rounded-15 px-6 pt-6 pb-8 space-y-4">
            <Input
              label="피그마 시안 URL"
              onChange={handleChange}
              labelClassName="font-medium text-11"
              className="h-8 rounded-md"
              type="url"
            />
            <Input
              label="배포된 서비스 URL"
              onChange={handleChange}
              labelClassName="font-medium text-11"
              className="h-8 rounded-md"
              type="url"
            />
            <Input
              label="피그마 루트 페이지"
              onChange={handleChange}
              labelClassName="font-medium text-11"
              className="h-8 rounded-md"
              type="text"
            />
          </form>
        </div>

        <div className="flex justify-center gap-10 children:px-8 ">
          <Button text="등록" />
          <Button text="등록 후 테스트하기" />
          <Button text="취소" />
        </div>
      </section>
    </form>
  );
}
