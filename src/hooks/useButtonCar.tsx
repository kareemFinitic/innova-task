import { TiArrowSortedDown } from 'react-icons/ti';
import { RxDashboard } from 'react-icons/rx';
import { VscSettings } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Shared/Button';

export const useButtonCar = () => {
  const { t } = useTranslation();

  const renderButton = (textKey: string) => (
    <Button
      text={t(`cars.${textKey}`)}
      bgColor="white"
      color="#5F6165"
      style={{
        padding: '7px 25px',
        borderRadius: 50,
        fontSize: 16,
        fontWeight: 500,
      }}
      icon={<TiArrowSortedDown size={20} color="#5F6165" />}
    />
  );

  const renderIconButton = (IconComponent: React.ElementType, size: number, isActive = false) => (
    <div
      className={`flex w-10 h-10 rounded-full justify-center items-center cursor-pointer ${
        isActive ? 'bg-[#A162F7]' : 'bg-white hover:bg-[#A162F7]'
      }`}
    >
      <IconComponent size={size}  color ={isActive ? "#FFFFFF" : ""}/>
    </div>
  );

  return {
    renderButton,
    renderIconButton,
    dashboardIcon: () => renderIconButton(RxDashboard, 20),
    settingsIcon: () => renderIconButton(VscSettings, 25, true), 
  };
};
