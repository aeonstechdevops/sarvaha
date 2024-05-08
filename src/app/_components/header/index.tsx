"use client";

import { HeaderLinks } from "@/app/config";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

type MenuDrawerProps = React.HTMLProps<HTMLDivElement> & { open: boolean };

const MenuDrawer = React.forwardRef<HTMLDivElement, MenuDrawerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          props.open ? "" : "md:translate-x-[100vw] translate-x-[100vw]",
          "fixed h-[100vh] md:w-[60vw] w-[100vw] bg-primary-4 right-0 transition-all duration-500 ease-in-out z-10",
          "flex flex-col gap-6 items-center justify-center"
        )}>
        {HeaderLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="p-2 font-header-font-weight-2 text-color-1 text-5xl">
            {link.title}
          </Link>
        ))}
      </div>
    );
  }
);

MenuDrawer.displayName = "MenuDrawer";

const Header = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const menuRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuDrawerOpen(false);
      }
      console.log(e.target, menuRef.current);
    };
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });
  return (
    <header
      style={{ height: "var(--header-height)" }}
      className="fixed top-0 w-full z-50">
      <MenuDrawer open={menuDrawerOpen} ref={menuRef} />
      <div className="wrapper py-2 h-full flex items-center gap-2 justify-between">
        <div className="z-20">
          <b>LOGO</b>
        </div>
        <div
          className="size-10 bg-primary-1 text-color-1 rounded-full flex items-center justify-center z-20 hover:cursor-pointer"
          onClick={() => setMenuDrawerOpen((prev) => !prev)}>
          {menuDrawerOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
