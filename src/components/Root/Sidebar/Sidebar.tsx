import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';
import Header from '../Navbar/Navbar';
import SidebarRoutes from './SidebarRoutes';
import SidebarConfigs from './SidebarConfigs';
import { useTranslation } from 'react-i18next';
import { useSidebarContent } from '../../../hooks/useSidebarContent';

const Layout: React.FC = () => {
  const { i18n } = useTranslation();
  const { translatedRoutes, translatedConfigs } = useSidebarContent();
  return (
    <div className="flex" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Sidebar */}
      <div className="flex flex-col h-auto sm:min-w-56 bg-white p-2 sm:p-5 shadow-sm">
        <Link
          to="/"
          className="flex justify-center sm:justify-start items-center gap-3 mb-10"
        >
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <h3 className="text-xl font-medium hidden sm:block">Motiv.</h3>
        </Link>

        {/* Routes Section */}
        <SidebarRoutes routes={translatedRoutes} />
        {/* Configurations Section */}
        <SidebarConfigs configs={translatedConfigs} />
      </div>

      {/* Main Content */}
      <div className="w-full">
        <Header />
        <div className="p-5 px-16">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
