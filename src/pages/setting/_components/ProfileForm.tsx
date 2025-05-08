import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { User } from '@/types/user.type';
import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';

interface ProfileFormProps {
  initialData: User;
  onSubmit: (data: User) => void;
}

export default function ProfileForm({ initialData, onSubmit }: ProfileFormProps) {
  const [formData, setFormData] = useState<User>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <Input
        label="이메일"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border-none shadow-custom focus:bg-white"
      />
      <Input
        label="이름"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
        className="border-none shadow-custom focus:bg-white"
      />
      <Input
        label="주소"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="border-none shadow-custom focus:bg-white"
      />
      <Input
        label="전화번호"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="border-none shadow-custom focus:bg-white placeholder:text-14"
        placeholder="eg) 00(0)-0000-0000"
      />

      <Button text="등록" type="submit" className="w-48 block mx-auto font-medium text-11 text-typography-dark" />
    </form>
  );
}
