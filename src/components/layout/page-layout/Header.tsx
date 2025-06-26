import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserProfile } from '@/store/queries/user/useUserQueries';
import searchIcon from '@/assets/icons/search.svg';
import notificationIcon from '@/assets/icons/notification.svg';
import profileImg from '@/assets/images/짱구.jpg';
import { menuItems, topMenuItem } from '@/components/layout/sidebar/_components/SidebarData';
import { setProjectName } from '@/store/redux/reducers/project';

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    dispatch(setProjectName(inputValue));
    navigate('/projects');
    setInputValue('');
  };

  const { data: profile } = useUserProfile();

  // 현재 경로에 있는 사이드 바의 메뉴 아이템 찾기
  const currentPage = useMemo(() => {
    const allMenuItems = [...menuItems, topMenuItem];
    const matchedItem = allMenuItems.find(
      (item) => item.path === location.pathname || (location.pathname.startsWith(item.path) && item.path !== '/')
    );
    return matchedItem ? matchedItem.title : '';
  }, [location.pathname]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-[95vw] max-w-2xl bg-background/90 backdrop-blur-md flex items-center justify-between px-4 py-2 rounded-full shadow-lg transition-all md:static md:top-0 md:left-0 md:translate-x-0 md:w-full md:max-w-full md:rounded-none md:shadow-none md:px-8 md:py-6">
      {/* 모바일 햄버거 메뉴 */}
      {onMenuClick && (
        <button className="block lg:hidden mr-2 p-2 rounded-full hover:bg-gray-100 transition" onClick={onMenuClick}>
          <svg width="28" height="28" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth="2" d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      )}
      {/* 현재 페이지 이름 */}
      <h1 className="font-bm font-medium text-lg md:text-2xl cursor-default flex-shrink-0 truncate max-w-[120px] md:max-w-[200px]">
        {currentPage}
      </h1>
      {/* 검색창 (모바일에서는 숨김) */}
      <div className="relative flex-1 max-w-[320px] w-full bg-white py-2 px-4 mx-2 rounded-full hidden md:flex">
        <button type="button" onClick={handleSearch}>
          <img src={searchIcon} alt="search button" className="absolute left-4 top-2" />
        </button>
        <input
          type="text"
          placeholder="프로젝트 검색"
          className="w-full rounded-full pl-10 text-base"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </div>
      <div className="flex items-center gap-2 lg:gap-4 min-w-0">
        {/* 알림 버튼 (모바일에서는 숨김) */}
        <div className="hidden lg:flex items-center">
          <button>
            <img src={notificationIcon} alt="notification button" />
          </button>
        </div>
        {/* 프로필 버튼 */}
        <button className="flex items-center min-w-0 max-w-[120px] lg:max-w-44 gap-2 rounded-full px-3 py-1 bg-white shadow lg:shadow-none overflow-hidden">
          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={profileImg} alt="profile img" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center items-start min-w-0">
            <p className="font-bm text-xs lg:text-sm truncate max-w-[60px] lg:max-w-[100px]">{profile?.username}</p>
            <p className="font-medium text-[10px] lg:text-7 text-typography-gray truncate max-w-[60px] lg:max-w-[100px]">
              Test Automation Developer
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}
