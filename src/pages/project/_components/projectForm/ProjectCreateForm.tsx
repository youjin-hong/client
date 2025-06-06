import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import Textarea from '@/components/ui/textarea/TextArea';
import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import { GenerateProject } from '@/types/project.type';
import { getFormattedToday } from '@/utils/format';
import { ChangeEvent, FormEvent, useState } from 'react';

interface ProjectCreateFormPropsType {
  username: string;
  onSubmit: (data: GenerateProject, actionType: 'register' | 'test', figmaFile: File | null) => void;
  onCancel: () => void;
}

export default function ProjectCreateForm({ username, onSubmit, onCancel }: ProjectCreateFormPropsType) {
  const [formData, setFormData] = useState<GenerateProject>({
    projectName: '',
    expectedTestExecution: '',
    projectEnd: '',
    description: '',
    figmaUrl: '',
    serviceUrl: '',
    rootFigmaPage: '',
    figmaFile: null
  });

  const [figmaFile, setFigmaFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (file: File | null) => {
    setFigmaFile(file);
  };

  const handleSubmitProjectCreateForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleRegisterProject = () => {
    onSubmit(formData, 'register', figmaFile);
  };

  const handleRegisterAndTest = () => {
    onSubmit(formData, 'test', figmaFile);
  };

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
        <Input
          label="테스트 예상 시작일"
          name="expectedTestExecution"
          value={formData.expectedTestExecution}
          onChange={handleChange}
          type="date"
          min={getFormattedToday()}
        />
        <Input
          label="프로젝트 마감일"
          name="projectEnd"
          value={formData.projectEnd}
          required
          type="date"
          onChange={handleChange}
          min={getFormattedToday()}
        />
        <Textarea label="설명" name="description" value={formData.description} onChange={handleChange} />
      </section>

      <section className="flex flex-col gap-5">
        <DesignSourceSection
          figmaUrl={formData.figmaUrl}
          serviceUrl={formData.serviceUrl}
          rootFigmaPage={formData.rootFigmaPage}
          onChange={handleChange}
          onFileChange={handleFileChange}
        />

        <div className="flex justify-center gap-10 children:px-8 children:font-medium">
          <Button text="등록" type="button" data-submit-type="register" onClick={handleRegisterProject} />
          <Button
            text="등록 후 테스트 생성하기"
            type="button"
            data-submit-type="test after register"
            onClick={handleRegisterAndTest}
          />
          <Button text="취소" type="button" data-submit-type="cancel" onClick={onCancel} />
        </div>
      </section>
    </form>
  );
}
