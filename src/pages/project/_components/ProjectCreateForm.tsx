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
    <form onSubmit={handleSubmitProjectCreateForm}>
      <section>
        <Input label="프로젝트명" required onChange={handleChange} />
        <Input label="프로젝트 관리자" required onChange={handleChange} />
        <Input label="테스트 예상 시작일" onChange={handleChange} />
        <Input label="프로젝트 마감일" onChange={handleChange} />
        <Input label="설명" onChange={handleChange} />
      </section>

      <section>
        <div>
          <h2 className="font-bm text-14 text-typography-dark pl-4">디자인 소스</h2>
          <form className="border-[0.5px] border-typography-gray rounded-15 px-6 py-7">
            <Input label="피그마 시안 URL" onChange={handleChange} className="h-8 rounded-md" />
            <Input label="배포된 서비스 URL" onChange={handleChange} />
            <Input label="피그마 루트 페이지" onChange={handleChange} />
          </form>
        </div>

        <div>
          <Button text="등록" />
          <Button text="등록 후 테스트하기" />
          <Button text="취소" />
        </div>
      </section>
    </form>
  );
}
