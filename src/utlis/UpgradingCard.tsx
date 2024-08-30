import { useTranslation } from "react-i18next";
import card2 from "../assets/images/car5.svg";
import card3 from "../assets/images/car6.svg";
const UpgradingCardsData = () => {
  const { t } = useTranslation();
  const upgradingCards = [
    {
      title: t("dashboard.upgrading.title"),
      amount: 20,
      textOne: t("dashboard.upgrading.textOne"),
      image: card2,
      description: t("dashboard.promotion.descriptionOne"),
      bgColor: "#0F2837",
    },
    {
      title: t("dashboard.upgrading.title"),
      amount: 1500,
      textOne: t("dashboard.upgrading.textTwo"),
      image: card3,
      description: t("dashboard.upgrading.descriptionTwo"),
      bgColor: "#6E1946",
    },
  ];
  return upgradingCards;
};
export default UpgradingCardsData;
