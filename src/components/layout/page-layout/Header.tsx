import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserProfile } from '@/store/queries/user/useUserQueries';
import searchIcon from '@/assets/icons/search.svg';
import notificationIcon from '@/assets/icons/notification.svg';
import profileImg from '@/assets/images/짱구.jpg';
import { menuItems, topMenuItem } from '@/components/layout/sidebar/_components/SidebarData';
import { setProjectName } from '@/store/redux/reducers/project';

export default function Header() {
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
    <header className="sticky top-0 z-[999] w-full bg-background flex items-center justify-around px-8 py-10">
      {/* 현재 페이지 이름 */}
      <h1 className="font-bm font-medium text-32 cursor-default">{currentPage}</h1>

      {/* 검색창 */}
      <div className="relative flex max-w-[510px] max-h-[50px] w-full bg-white py-3 px-5 mx-2 rounded-[23.5px]">
        <button type="button" onClick={handleSearch}>
          <img src={searchIcon} alt="search button" className="absolute left-5 top-2" />
        </button>
        <input
          type="text"
          placeholder="프로젝트 검색"
          className="w-full rounded-[23.5px] pl-10"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </div>

      <div className="flex gap-4">
        {/* 알림 버튼 */}
        <div className="flex items-center">
          <button>
            <img src={notificationIcon} alt="notification button" />
          </button>
        </div>

        {/* 프로필 버튼 */}
        <button className="flex max-w-44 gap-2 rounded-15 px-5 py-1 bg-white">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src={profileImg} alt="profile img" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="font-bm text-14">{profile?.username}</p>
            <p className="font-medium text-7 text-typography-gray">Test Automation Developer</p>
          </div>
        </button>
      </div>
    </header>
  );
}
