import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useSearchInput } from "../../hooks/useSearchInput";
import { InputProps } from "../../interfaces/interfaces";
const Input: React.FC<InputProps> = ({
  placeholderKey = "inputPlaceholderText",
  width = "w-96",
  iconSize = 25,
}) => {
  const { t } = useTranslation();
  const { query, handleChange } = useSearchInput();
  return (
    <div className={`flex bg-input p-3 rounded-md items-center gap-2 ${width}`}>
      <IoSearchOutline size={iconSize} color="#7C7C8D" />
      <input
        type="search"
        onChange={handleChange}
        value={query}
        className="outline-none bg-input w-full placeholder:text-input placeholder:font-medium font-medium"
        placeholder={t(placeholderKey)}
      />
    </div>
  );
};
export default Input;
