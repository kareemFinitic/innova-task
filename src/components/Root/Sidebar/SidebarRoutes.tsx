// SidebarRoutes.tsx
import React from 'react';
import SidebarItemUI from './SidebarItem';
import { SidebarRoutesProps } from '../../../interfaces/interfaces';



const SidebarRoutes: React.FC<SidebarRoutesProps> = ({ routes }) => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {routes.map((route, index) => (
        <SidebarItemUI
          key={index}
          path={route.path}
          name={route.name}
          icon={route.icon}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
