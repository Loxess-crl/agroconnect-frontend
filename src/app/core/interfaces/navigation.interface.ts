export interface INavigationElement {
  name: string;
  icon: string;
  isActive: boolean;
  link: string;
  dependences: string[];
  show: boolean;
  badge?: number;
}
