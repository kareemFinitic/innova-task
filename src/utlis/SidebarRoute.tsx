import { RxDashboard } from "react-icons/rx";
import { LiaCarSolid } from "react-icons/lia";
import { SidebarItem } from "../interfaces/interfaces";
// Define sidebar routes
export const routes: SidebarItem[] = [
  {
    path: "/",
    name: "Dashboard", 
    icon: <RxDashboard size={30} />,
  },
  {
    path: "/cars",
    name: "Cars", 
    icon: <LiaCarSolid size={35} />,
  },
];
