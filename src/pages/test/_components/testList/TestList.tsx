import { forwardRef } from 'react';
import { TestData } from '@/types/test.type';
import TestListItem from './TestListItem';

interface TestListProps {
  tests: TestData[];
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

const TestList = forwardRef<HTMLDivElement, TestListProps>(({ tests, isFetchingNextPage, hasNextPage }, ref) => {
  return (
    <section className="grid grid-cols-3 gap-10">
      {tests.length > 0 ? (
        tests.map((test) => <TestListItem key={test.projectId} data={test} />)
      ) : (
        <div className="col-span-3 text-center text-typography-gray text-16 py-20">입력하신 검색 결과가 없습니다.</div>
      )}
      <div ref={ref}>{isFetchingNextPage ? <p>Loading more...</p> : !hasNextPage && ''}</div>
    </section>
  );
});

export default TestList;
