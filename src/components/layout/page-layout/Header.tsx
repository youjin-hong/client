import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed z-[999] w-full bg-transparent flex items-center justify-around py-12">
      {/* 현재 페이지 이름 */}
      <Link to="/" className="block">
        <div className="font-bm font-medium text-32 cursor-pointer">현재페이지이름</div>
      </Link>

      {/* 검색창 */}
      <div className="relative flex max-w-[510px] max-h-[50px] w-full bg-white py-3 px-5 rounded-[23.5px]">
        <button type="button">
          <img src="/src/assets/icons/search.svg" alt="search button" className="absolute left-5 top-2" />
        </button>
        <input type="text" placeholder="프로젝트 검색" className="w-full rounded-[23.5px] pl-10" />
      </div>

      <div className="flex gap-4">
        {/* 알림 버튼 */}
        <div className="flex items-center">
          <button>
            <img src="/src/assets/icons/notification.svg" alt="notification button" />
          </button>
        </div>

        {/* 프로필 버튼 */}
        <button className="flex max-w-44 gap-2 rounded-15 px-5 py-1 bg-white">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <img src="/src/assets/images/no-profile.png" alt="profile img" className="w-7" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="font-bm text-14">사용자이름</p>
            <p className="font-medium text-7 text-typography-gray">Test Automation Developer</p>
          </div>
        </button>
      </div>
    </header>
  );
}
