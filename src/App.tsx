import React from "react";
import { RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import createRouter from "./router/router";
import Loader from "./ui/Shared/Loader";
const App: React.FC = () => {
  const { t } = useTranslation();
  const router = createRouter(t);
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
export default App;
