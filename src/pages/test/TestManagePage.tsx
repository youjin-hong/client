import Input from '@/components/ui/input/Input';
import searchIcon from '@/assets/icons/search.svg';
import TestTitle from '@/pages/test/_components/TestTitle';
import Select from '@/components/ui/select/Select';
import { useState } from 'react';

const sortOptions = [{ label: '이름순', value: 'name' }];
const dateOptions = [
  { label: '최신순', value: 'newest' },
  { label: '오래된 순', value: 'oldest' }
];

export default function TestManagePage() {
  const [selected, setSelected] = useState('');

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <TestTitle />
      <div className="flex items-center justify-between w-full gap-4 py-5">
        <div className="relative flex-1 max-w-[510px] min-w-0">
          <img src={searchIcon} alt="search button" className="absolute top-2.5 left-4 w-4 cursor-pointer" />
          <Input
            type="text"
            placeholder="프로젝트 검색"
            className="w-full max-h-[35px] rounded-20 pl-10 border-[0.5px] border-typography-gray"
          />
        </div>

        <div className="flex gap-2">
          <Select value={selected} onChange={setSelected} options={sortOptions} />
          <Select value={selected} onChange={setSelected} options={dateOptions} className="bg-[#9991F4] border-none" />
        </div>
      </div>
    </div>
  );
}
