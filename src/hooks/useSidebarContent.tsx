import { useTranslation } from 'react-i18next';
import { routes as originalRoutes } from '../utlis/SidebarRoute';
import { configs as originalConfigs } from '../utlis/SidebarConfig';

export const useSidebarContent = () => {
  const { t } = useTranslation();
  const translatedRoutes = originalRoutes.map(route => ({
    ...route,
    name: t(`sidebar.${route.name.toLowerCase()}`)
  }));
  const translatedConfigs = originalConfigs.map(config => ({
    ...config,
    name: t(`sidebar.${config.name.toLowerCase()}`)
  }));
  return { translatedRoutes, translatedConfigs };
};
