import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { t } from "i18next";
 export const configs = [
    {
      path: "#",
      name: t("settings"),
      icon: <IoSettingsOutline size={30} />,
    },
    {
      name: t("logout"),
      icon: <SlLogout size={26} />,
      onClick: () => {
        console.log("Logout Successfully");
      },
    },
  ];
