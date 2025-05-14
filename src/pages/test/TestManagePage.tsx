import { useState } from 'react';
import ScrollToTopButton from '@/components/ui/scrollTopButton/ScrollToTopButton';
import TestTitle from '@/pages/test/_components/TestTitle';
import { useGetTestListInfinite } from '@/store/queries/test/useTestQueries';
import UseIntersectionObserver from '@/utils/useIntersectionObserver';
import SearchHeader from '@/pages/test/_components/searchHeader/SearchHeader';
import TestList from '@/pages/test/_components/testList/TestList';

export default function TestManagePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [nameSort, setNameSort] = useState('');
  const [dateSort, setDateSort] = useState('');

  const {
    data: testList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError
  } = useGetTestListInfinite({
    projectName: searchTerm,
    sortBy: [nameSort, dateSort].filter(Boolean).join(',')
  });

  const bottomRef = UseIntersectionObserver({
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage
  });

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleReset = () => {
    setSearchTerm('');
    setInputValue('');
    setNameSort('');
    setDateSort('');
  };

  if (isPending) return <div className="col-span-3 text-center text-typography-gray text-16 pt-40">로딩 중...</div>;
  if (isError)
    return <div className="col-span-3 text-center text-typography-gray text-16 pt-40">오류가 발생했습니다.</div>;

  const tests = testList?.pages.flatMap((page) => page.tests) || [];

  return (
    <div className="w-[90%] flex flex-col m-auto">
      <TestTitle />
      <SearchHeader
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSearch={handleSearch}
        onReset={handleReset}
        nameSort={nameSort}
        dateSort={dateSort}
        onNameSortChange={setNameSort}
        onDateSortChange={setDateSort}
      />

      <TestList tests={tests} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} ref={bottomRef} />

      <ScrollToTopButton />
    </div>
  );
}
