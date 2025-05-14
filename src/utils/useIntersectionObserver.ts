// 스크롤 위치 감지하는 IntersectionObserver API 훅
import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  enabled: boolean;
  threshold?: number;
}

export default function UseIntersectionObserver({
  onIntersect,
  enabled,
  threshold = 1.0
}: UseIntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return; // enabled가 false이면 hasNextPage가 없다는 뜻이니까 observer 중단
    if (!ref.current) return; // 디폴트값 1.0으로 설정해서 100% 화면에 들어오면 동작

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, enabled, threshold]);

  return ref;
}
