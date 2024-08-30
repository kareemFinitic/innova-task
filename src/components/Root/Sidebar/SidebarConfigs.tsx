// SidebarConfigs.tsx
import React from 'react';
import SidebarItemUI from './SidebarItem';
import { SidebarConfigsProps } from '../../../interfaces/interfaces'; 



const SidebarConfigs: React.FC<SidebarConfigsProps> = ({ configs }) => {
  return (
    <div className="flex flex-col gap-3 mt-auto">
      {configs.map((config, index) => (
        <SidebarItemUI
          key={index}
          path={config.path}
          name={config.name}
          icon={config.icon}
          onClick={config.onClick}
        />
      ))}
    </div>
  );
};

export default SidebarConfigs;
