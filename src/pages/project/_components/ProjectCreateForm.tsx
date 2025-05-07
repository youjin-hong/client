import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import Textarea from '@/components/ui/textarea/TextArea';
import DesignSourceSection from '@/pages/project/_components/DesignSourceSection';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <Input
          label="프로젝트 관리자"
          required
          name="username"
          value={username}
          disabled
          className="bg-button-hover text-typography-gray"
        />
        <Input label="테스트 예상 시작일" onChange={handleChange} type="date" />
        <Input
          label="프로젝트 마감일"
          name="projectEnd"
          value={formData.projectEnd}
          required
          type="date"
          onChange={handleChange}
        />
        <Textarea label="설명" name="description" value={formData.description} onChange={handleChange} />
      </section>

      <section className="flex flex-col gap-5">
        <DesignSourceSection
          figmaUrl={formData.figmaUrl}
          serviceUrl={formData.serviceUrl}
          rootFigmaPage={formData.rootFigmaPage}
          onChange={handleChange}
        />

        <div className="flex justify-center gap-10 children:px-8 ">
          <Button text="등록" type="submit" data-submit-type="register" />
          <Button text="등록 후 테스트하기" type="submit" data-submit-type="test after register" />
          <Button text="취소" type="button" data-submit-type="cancel" />
        </div>
      </section>
    </form>
  );
}
