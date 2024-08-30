import { useTranslation } from "react-i18next";
import image from "../../assets/images/car4.svg";
import Button from "../../ui/Shared/Button";

const DiscoverCar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex md:w-1/2 w-full bg-[#FFE0BA] py-3 px-7 justify-between items-center rounded-md">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-medium">{t("dashboard.main.title")}</h2>
        <p className="text-lg">{t("dashboard.main.description")}</p>
        <Button color="white" bgColor="#0F2837" text={t("dashboard.min.button")} />
      </div>
      <img src={image} className="max-w-80 min-w-16" alt={t("dashboard.main.title")} />
    </div>
  );
};

export default DiscoverCar;
