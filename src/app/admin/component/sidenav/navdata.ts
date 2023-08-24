import { INavItem } from "./helper";

export const navItems : INavItem[] = [
  {
    routerlink: 'home',
    icon: 'fa-solid fa-palette',
    label: 'About',
    items: [
      {
        label: 'About',
      },
      {
        label: 'About',
      },
      {
        label: 'About',
      },
      {
        label: 'About',
      },
      {
        label: 'About',
      }
    ],
  },
  {
    // routerlink: '',
    icon: 'fa-solid fa-house',
    label: 'Home Slider Banner',
  },
  {
    routerlink: 'home-banner',
    icon: 'fa-solid fa-house',
    label: 'Home Banner',
  },
  {
    icon: 'fa-solid fa-house',
    label: 'Home Page Content',
  },
  {
    icon: 'fa-solid fa-list-check',
    label: 'Manage Category',
  },
  {
    icon: 'fa-brands fa-blogger',
    label: 'Blogs',
  },
  {
    icon: 'fa fa-address-book',
    label: 'Contact',
  },
  {
    icon: 'fa-solid fa-user-tie',
    label: 'Customer Logo',
  },
  {
    icon: 'fa-solid fa-info',
    label: 'Information',
  },
];
