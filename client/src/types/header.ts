import { LinkProps } from "./link";

export interface HeaderProps {
  links: LinkProps[];
  brand: string;
  isAuthenticated: boolean;
  onLogout: () => void;
  backgroundImage: string;
  title: string;
}
