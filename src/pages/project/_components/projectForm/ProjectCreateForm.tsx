import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';
import Textarea from '@/components/ui/textarea/TextArea';
import DesignSourceSection from '@/pages/project/_components/projectForm/DesignSourceSection';
import { GenerateProject } from '@/types/project.type';
import { getFormattedToday } from '@/utils/format';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

interface ProjectCreateFormPropsType {
  username?: string;
  initialValues?: GenerateProject;
  mode?: 'create' | 'modify';
  onSubmit: (data: GenerateProject, actionType: 'register' | 'test', figmaFile: File | null) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function ProjectCreateForm({
  username,
  initialValues,
  mode = 'create',
  onSubmit,
  onCancel,
  isLoading
}: ProjectCreateFormPropsType) {
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

  // mode에 따른 텍스트 설정
  const buttonTexts = useMemo(() => {
    const baseText = mode === 'modify' ? '수정' : '등록';
    return {
      primary: isLoading ? `${baseText} 중...` : baseText,
      secondary: isLoading ? `${baseText} 및 테스트 중...` : `${baseText} 후 테스트 생성하기`
    };
  }, [mode, isLoading]);

  // initialValue가 변경될 때 formData 업데이트
  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
      setFigmaFile(initialValues?.figmaFile || null);
    }
  }, [initialValues]);

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

  const handleRegisterProject = () => {
    onSubmit(formData, 'register', figmaFile);
  };

  const handleRegisterAndTest = () => {
    onSubmit(formData, 'test', figmaFile);
  };

  return (
    <div className="flex flex-col gap-6">
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
          <Button text={buttonTexts.primary} type="button" onClick={handleRegisterProject} disabled={isLoading} />
          <Button text={buttonTexts.secondary} type="button" onClick={handleRegisterAndTest} disabled={isLoading} />
          <Button text="취소" type="button" data-submit-type="cancel" onClick={onCancel} disabled={isLoading} />
        </div>
      </section>
    </div>
  );
}
