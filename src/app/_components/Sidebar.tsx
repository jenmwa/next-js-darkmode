"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdDashboard, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { SidebarContext } from "./SidebarContext";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "About",
    href: "/about",
    icon: <BsPeople />,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: <FiMail />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <TiContacts />,
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
      <div className=" sidebar__wrapper">
        <button className="btn" onClick={toggleSidebar}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <aside className="sidebar" data-collapse={isCollapsed}>
          <div className="flex items-center gap-4">
            <Image
              src="/next.svg"
              width={80}
              height={80}
              className="sidebar__logo"
              alt={""}
            />
            <p className="sidebar__logo-name">LogoName</p>
          </div>

          <ul className="sidebar__list">
            {sidebarItems.map((item, index) => (
              <li className="sidebar__item" key={index}>
                <Link href={item.href} className="sidebar__link">
                  <div className="sidebar__icon">{item.icon}</div>
                  <span className="sidebar__name">{item.name}</span>
                </Link>{" "}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};
