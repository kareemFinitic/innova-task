import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarItem } from '../../../interfaces/interfaces';

const SidebarItemUI: React.FC<SidebarItem> = ({ path = "#", name, icon, onClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link
      to={path}
      className={`flex items-center gap-2 p-3 rounded-md ${
        currentPath === path ? 'bg-slate-300' : 'hover:bg-slate-200'
      }`}
      onClick={onClick}
    >
      {icon}
      <h3 className="text-base font-normal hidden sm:block w-full">{name}</h3>
    </Link>
  );
};

export default SidebarItemUI;
