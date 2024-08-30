import Avatar from "../../../assets/images/avatar.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import Input from "../../../ui/Shared/Input";
import { MdLanguage } from "react-icons/md";
import { t } from "i18next";
import i18n from "../../../locales";
const Navbar: React.FC = () => {
 const handleLanguage = () => {
  i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  }
  return (
    <header className="flex items-center justify-between gap-3 p-5 bg-white shadow-sm flex-wrap">
      {/* Search Input Component */}
      <Input />
      {/* Notification and User Avatar */}
      <div className="flex items-center gap-8">
        {/* Lang */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLanguage}>
        <MdLanguage size={35} />
          <h5>{t("sidebar.language")}</h5>
        </div>
        {/* Notifications Icon */}
        <IoMdNotificationsOutline
          className="cursor-pointer hover:opacity-50"
          size={25}
          aria-label="Notifications"
        />
        {/* User Avatar */}
        <img
          src={Avatar}
          className="w-10 h-10 rounded-full"
          alt="User Avatar"
        />
      </div>
    </header>
  );
};
export default Navbar;
