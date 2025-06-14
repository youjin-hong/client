import { useEffect, useState, useMemo, useCallback } from 'react';

const AnimatedBackground = () => {
  const [viewportWidth, setViewportWidth] = useState(4000);

  // 디바운싱된 resize 핸들러
  const debouncedResize = useCallback(
    (() => {
      let timeoutId: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const diagonalStretch = window.innerWidth * 2;
          setViewportWidth(diagonalStretch);
        }, 150); // 150ms 디바운싱
      };
    })(),
    []
  );

  useEffect(() => {
    const updateWidth = () => {
      const diagonalStretch = window.innerWidth * 2;
      setViewportWidth(diagonalStretch);
    };

    updateWidth();
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [debouncedResize]);

  // 원본 rect의 시작 좌표 (x0, y0)
  const x0 = 6.75488;
  const y0 = -34.5195;
  // 회전 각도 (도 단위)
  const angle = 33.4396;

  // 필터를 메모이제이션
  const filters = useMemo(() => {
    const filterElements: React.ReactNode[] = [];
    const groupIndex = 0;
    const linesPerGroup = 8; // 13개에서 8개로 줄여서 성능 개선
    const positionsCount = 3;

    for (let posIndex = 0; posIndex < positionsCount; posIndex++) {
      for (let i = 0; i < linesPerGroup; i++) {
        const filterId = `textureFilter_${groupIndex}_${posIndex}_${i}`;
        const seed = 5322 + groupIndex * 1000 + posIndex * 100 + i * 10;

        filterElements.push(
          <filter
            key={filterId}
            id={filterId}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feTurbulence type="fractalNoise" baseFrequency="0.12 0.12" numOctaves="1" seed={seed} result="noise" />
            <feDisplacementMap
              in="shape"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
            />
            <feMerge>
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        );
      }
    }

    return filterElements;
  }, []);

  // 그룹 렌더링을 메모이제이션
  const renderOneGroup = useMemo(() => {
    const groupIndex = 0;
    const linesPerGroup = 8; // 성능을 위해 줄임
    const lineSpacing = 20; // 간격을 약간 늘려서 밀도 조정

    // 3개 위치 정의: 오른쪽 위, 가운데, 왼쪽 아래
    const positions = [
      { offsetX: 1300, offsetY: -300 },
      { offsetX: 800, offsetY: 150 },
      { offsetX: -750, offsetY: 550 }
    ];

    return positions.map((position, posIndex) => (
      <g key={`pos-${posIndex}`}>
        {Array.from({ length: linesPerGroup }, (_, i) => {
          const offsetX = Math.sin((angle * Math.PI) / 180) * lineSpacing * i;
          const offsetY = -Math.cos((angle * Math.PI) / 180) * lineSpacing * i;

          const xi = x0 + offsetX + position.offsetX;
          const yi = y0 + offsetY + position.offsetY;
          const filterId = `textureFilter_${groupIndex}_${posIndex}_${i}`;

          return (
            <g key={i} filter={`url(#${filterId})`}>
              <rect
                x={xi - viewportWidth / 2}
                y={yi}
                width={viewportWidth}
                height="9"
                transform={`rotate(${angle} ${xi} ${yi})`}
                fill="#B3C7AA"
              />
            </g>
          );
        })}
      </g>
    ));
  }, [viewportWidth, angle, x0, y0]);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-600 -400 2640 1600"
      preserveAspectRatio="xMidYMid slice"
      style={{ willChange: 'transform' }} // GPU 가속
    >
      <defs>{filters}</defs>

      {/* 애니메이션 그룹 수를 줄임 */}
      <g className="animate-flow-line">{renderOneGroup}</g>
      <g className="animate-flow-line" style={{ animationDelay: '0.5s' }}>
        {renderOneGroup}
      </g>
    </svg>
  );
};

export default AnimatedBackground;
