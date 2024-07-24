import React from "react";
import {
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";

export const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: <HiOutlineHome />,
  },
  {
    name: "About",
    href: "/about",
    icon: <HiOutlineUser />,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <HiOutlineBriefcase />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <HiOutlineMail />,
  },
];
