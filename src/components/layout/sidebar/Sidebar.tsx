import MenuItem from '@/components/layout/sidebar/_components/MenuItem';
import { menuItems, topMenuItem } from '@/components/layout/sidebar/_components/SidebarData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 max-w-[280px] w-full h-screen z-[999] bg-[#E9E9E9]">
      <Link to="/" className="flex justify-center pt-8 pb-14">
        <img src="/src/assets/logos/AUTA_small.svg" alt="logo" />
      </Link>

      <div className="my-4">
        <MenuItem item={topMenuItem} fontSize="text-16" />
      </div>

      <nav>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  );
}
