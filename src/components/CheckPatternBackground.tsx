const CheckeredBackground = () => {
  // 격자 생성을 위한 배열
  const createGrid = () => {
    const squares = [];
    const squareSize = 100;
    const gap = 0; // 사각형 사이 간격
    const totalSize = squareSize + gap;

    // 화면 크기에 맞게 충분한 수의 사각형 생성
    const cols = Math.ceil(window.innerWidth / totalSize) + 2;
    const rows = Math.ceil(window.innerHeight / totalSize) + 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // 짝수+짝수 또는 홀수+홀수일 때만 사각형 표시
        if ((row + col) % 2 === 0) {
          squares.push(
            <div
              key={`${row}-${col}`}
              className="absolute bg-[#B3C7AA] rounded-[5px]"
              style={{
                width: `${squareSize}px`,
                height: `${squareSize}px`,
                left: `${col * totalSize}px`,
                top: `${row * totalSize}px`
              }}
            />
          );
        }
      }
    }
    return squares;
  };

  return <div className="absolute inset-0 pointer-events-none overflow-hidden">{createGrid()}</div>;
};

export default CheckeredBackground;
