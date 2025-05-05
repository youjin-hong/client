import { Link, useLocation } from 'react-router-dom';
import { MenuItemType } from './SidebarData';

interface MenuItemProps {
  item: MenuItemType;
  fontSize?: string;
}

export default function MenuItem({ item, fontSize = 'text-20' }: MenuItemProps) {
  const location = useLocation();
  const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);

  return (
    <Link
      to={item.path}
      className={`flex px-12 py-5 items-center gap-3 transition-colors ${isActive ? 'bg-button-default' : 'hover:bg-button-default'}`}>
      <img src={item.icon} alt={item.alt} />
      <span className={`font-bm ${fontSize}`}>{item.title}</span>
    </Link>
  );
}
