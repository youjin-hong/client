import { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(4000);

  useEffect(() => {
    const updateWidth = () => {
      const diagonalStretch = window.innerWidth * 2;
      setViewportWidth(diagonalStretch);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth); // 창 크기 변경 시 업데이트
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // 원본 rect의 시작 좌표 (x0, y0)
  const x0 = 6.75488;
  const y0 = -34.5195;
  // 회전 각도 (도 단위)
  const angle = 33.4396;

  const renderOneGroup = () => {
    const groupIndex = 0;
    const linesPerGroup = 13; // 한 그룹당 13개 평행선
    const lineSpacing = 18; // 평행선 사이의 간격

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
  };

  const renderFilters = () => {
    const filters: React.ReactNode[] = [];
    const groupIndex = 0;
    const linesPerGroup = 13;
    const positionsCount = 3;

    for (let posIndex = 0; posIndex < positionsCount; posIndex++) {
      for (let i = 0; i < linesPerGroup; i++) {
        const filterId = `textureFilter_${groupIndex}_${posIndex}_${i}`;
        const seed = 5322 + groupIndex * 1000 + posIndex * 100 + i * 10;

        filters.push(
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
            <feTurbulence type="fractalNoise" baseFrequency="0.15 0.15" numOctaves="2" seed={seed} result="noise" />
            <feDisplacementMap
              in="shape"
              in2="noise"
              scale="6"
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

    return filters;
  };

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-600 -400 2640 1600"
      preserveAspectRatio="xMidYMid slice">
      <defs>{renderFilters()}</defs>

      <g className="animate-flow-line">{renderOneGroup()}</g>
      <g className="animate-flow-line">{renderOneGroup()}</g>
      <g className="animate-flow-line">{renderOneGroup()}</g>
    </svg>
  );
};

export default AnimatedBackground;
