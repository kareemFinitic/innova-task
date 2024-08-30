import { CSSProperties, ReactNode } from "react";

export interface ButtonProps {
  color?: string;
  bgColor?: string;
  text: string;
  icon?: ReactNode;
  style?: CSSProperties;
}


export interface ErrorMessageProps {
  message: string;
}

export interface SearchState {
  searchText: string;
}

export interface SidebarItem {
  path?: string;
  name: string;
  icon: JSX.Element;
  onClick?: () => void;
}


export interface SidebarConfigsProps {
  configs: SidebarItem[];
}

export interface SidebarRoutesProps {
  routes: SidebarItem[];
}

export interface RecommendedProps {
  bgColor: string;
  percentageOfRecommended   : string;
  image: string;
  title: string;
  vistis: string;
  speed: string;
}

export interface CardProps {
  title: string;
  image: string;
  amount: number;
  text: string;
  description: string;
  bgColor: string;
  textColor: string;
}


export interface CarProps {
  title: string;
  image: string;
  type: string;
  drivingType: string;
  price: string;
  boughtNumber: number;
}

export interface InputProps {
  placeholderKey?: string;
  width?: string;
  iconSize?: number;
}