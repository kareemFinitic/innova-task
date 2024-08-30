import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/RootLayout/RootLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cars from "../pages/Cars/Cars";
import Errors from "../ui/Error/Errors";

const router = (t: (key: string) => string) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "cars",
          element: <Cars />,
        },
        {
          path: "*",
          element: <Errors message={t('errorMessage')} />,
        },
      ],
    },
  ]);
};

export default router;
