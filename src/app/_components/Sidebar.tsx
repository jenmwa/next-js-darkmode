"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { SidebarContext } from "./SidebarContext";
import ThemeSwitch from "./ThemeSwitch";
import { FaCode } from "react-icons/fa";
import {
  HiBriefcase,
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";

const sidebarItems = [
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

export const Sidebar = () => {
  const { toggleSidebar, isCollapsed } = useContext(SidebarContext);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <>
      <div className="relative ">
        <button
          className="absolute right-0 top-[4.7rem] border-none bg-[var(--color-bg)] w-6 h-6 border border-[var(--color-border)] rounded-full flex justify-center items-center cursor-pointer transform translate-x-1/2 text-[1.1rem]"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <MdOutlineKeyboardArrowRight />
          ) : (
            <MdOutlineKeyboardArrowLeft />
          )}
        </button>
        <aside
          className="w-[17rem] h-full bg-[var(--color-bg)] p-4 transition-all duration-400 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.1)] overflow-hidden dark:bg-black"
          data-collapse={isCollapsed}
        >
          <div className="w-max flex items-center gap-4 pb-4 mb-4 border-b border-[var(--color-border)]">
            <Image
              src="/next.svg"
              width={80}
              height={80}
              className="w-[3.5rem] h-[3.5rem] object-contain rounded-2xl"
              alt={""}
            />
            <p className="text-lg font-semibold sidebar__logo-name dark:text-red-300">
              LogoName
            </p>
          </div>

          <ul className="list-none">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className=" text-base no-underline text-black p-3.5 pl-3.5 pr-4 flex items-center bg-[var(--color-sidebar-item)] mb-4 rounded-lg active:text-slate-900 active:bg-slate-200 hover:bg-slate-700 hover:text-slate-50"
                >
                  <div className="inline-block text-2xl mr-2">{item.icon}</div>
                  <span className="ml-2 sidebar__name">{item.name}</span>
                </Link>{" "}
              </li>
            ))}
          </ul>
          <div>
            <ThemeSwitch></ThemeSwitch>
          </div>
        </aside>
      </div>
    </>
  );
};
