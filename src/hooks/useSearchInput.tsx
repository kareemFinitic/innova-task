import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/reducers/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";

export const useSearchInput = (initialQuery: string = "") => {
  const [query, setQuery] = useState<string>(initialQuery);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    if (location.pathname !== "/cars") navigate("/cars");
    setQuery(newQuery);
    dispatch(setSearchText(newQuery));
  };

  return { query, handleChange };
};
