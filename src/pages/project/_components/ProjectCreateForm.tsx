import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import { GenerateProject } from '@/types/project.type';
import { ChangeEvent, FormEvent, useState } from 'react';

interface ProjectCreateFormPropsType {
  username: string;
  onSubmit: (data: GenerateProject) => void;
}

export default function ProjectCreateForm({ username, onSubmit }: ProjectCreateFormPropsType) {
  const [formData, setFormData] = useState<GenerateProject>({
    projectName: '',
    administrator: username,
    projectEnd: '',
    description: '',
    figmaUrl: '',
    serviceUrl: '',
    rootFigmaPage: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitProjectCreateForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    console.log('프로젝트생성form 제출');
  };

  // TODO: 테스트 예상 시작일은 프로젝트 마감일 전이어야 하고,
  // //프로젝트 생성일보다 앞설 수 없음. 프로젝트 마감일도 프로젝트 생성일보다 앞설 수 없음

  return (
    <form onSubmit={handleSubmitProjectCreateForm} className="flex flex-col gap-6">
      <section className="space-y-5">
        <Input label="프로젝트명" required name="projectName" value={formData.projectName} onChange={handleChange} />
        <Input label="프로젝트 관리자" required name="username" value={username} disabled className="bg-button-hover" />
        <Input label="테스트 예상 시작일" onChange={handleChange} type="date" />
        <Input
          label="프로젝트 마감일"
          name="projectEnd"
          value={formData.projectEnd}
          required
          type="date"
          onChange={handleChange}
        />
        <Input label="설명" name="description" value={formData.description} onChange={handleChange} />
      </section>

      <section className="flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-14 text-typography-dark pl-4 py-3">디자인 소스</h2>
          <div className="border-[0.5px] border-typography-gray rounded-15 px-6 pt-6 pb-8 space-y-4">
            <Input
              label="피그마 시안 URL"
              name="figmaUrl"
              value={formData.figmaUrl}
              required
              onChange={handleChange}
              labelClassName="font-medium text-11"
              className="h-8 rounded-md"
              type="url"
            />
            <Input
              label="배포된 서비스 URL"
              name="serviceUrl"
              value={formData.serviceUrl}
              required
              onChange={handleChange}
              labelClassName="font-medium text-11"
              className="h-8 rounded-md"
              type="url"
            />
            <Input
              label="피그마 루트 페이지"
              name="rootFigmaPage"
              value={formData.rootFigmaPage}
              required
              onChange={handleChange}
              labelClassName="font-medium text-11"
              className="h-8 rounded-md"
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-center gap-10 children:px-8 ">
          <Button text="등록" type="submit" data-submit-type="register" />
          <Button text="등록 후 테스트하기" type="submit" data-submit-type="test after register" />
          <Button text="취소" type="button" data-submit-type="cancel" />
        </div>
      </section>
    </form>
  );
}
