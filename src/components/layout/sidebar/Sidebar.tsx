import { Link, useNavigate } from 'react-router-dom';
import smallLogo from '@/assets/logos/AUTA_small.svg';
import { ROUTES } from '@/constants';
import { useLogout } from '@/store/queries/auth/useAuthMutations';
import MenuItem from '@/components/layout/sidebar/_components/MenuItem';
import { menuItems, topMenuItem } from '@/components/layout/sidebar/_components/SidebarData';
import { useAppDispatch } from '@/store/redux/store';
import { logout } from '@/store/redux/reducers/auth';

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        dispatch(logout());
        navigate(ROUTES.LANDING);
      }
    });
  };

  return (
    <aside className="fixed left-0 top-0 max-w-[280px] w-full h-screen z-[999] bg-pointColor">
      <Link to="/" className="flex justify-center pt-8 pb-14">
        <img src={smallLogo} alt="logo" />
      </Link>

      <div className="my-4">
        <MenuItem item={topMenuItem} fontSize="text-16" />
      </div>

      <nav>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </nav>
      <div className="w-full flex justify-center py-12">
        <button
          onClick={handleLogout}
          className="border-0 border-b border-[#696969]  text-[#696969] font-medium text-11">
          로그아웃
        </button>
      </div>
    </aside>
  );
}
