"use client";

import { HeaderLinks } from "@/app/config";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

type MenuDrawerProps = React.HTMLProps<HTMLDivElement> & {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDrawer = React.forwardRef<HTMLDivElement, MenuDrawerProps>(
  ({ open, setOpen }, ref) => {
    const pathname = usePathname();
    return (
      <div
        ref={ref}
        className={cn(
          open ? "" : "translate-x-[100vw] md:translate-x-[100vw]",
          "fixed right-0 z-10 h-[100vh] w-[100vw] bg-primary-4 transition-all duration-500 ease-in-out md:w-[60vw]",
          "flex flex-col items-center justify-center gap-6",
        )}
      >
        {HeaderLinks.map(({ title, url }, idx) => (
          <Link
            key={idx}
            href={url}
            onClick={() => {
              setOpen(false);
            }}
            className={cn(
              "p-2 text-5xl font-header-font-weight-2 text-color-1",
              pathname === url && "text-secondary-1",
            )}
          >
            {title}
          </Link>
        ))}
      </div>
    );
  },
);

MenuDrawer.displayName = "MenuDrawer";

const Header = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const menuRef = React.createRef<HTMLDivElement>();

  const outsideClickHandler = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMenuDrawerOpen(false);
    }
  };

  const scrollPosition = useScrollPosition();
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });
  return (
    <header
      style={{ height: "var(--header-height)" }}
      className={cn(
        "fixed top-0 z-50 w-full bg-transparent transition-all duration-500 ease-in-out",
        scrollPosition > windowDimensions.height / 2 && "bg-color-1 shadow-xl",
      )}
    >
      <MenuDrawer
        open={menuDrawerOpen}
        ref={menuRef}
        setOpen={setMenuDrawerOpen}
      />
      <div
        className={cn(
          "wrapper flex h-full items-center justify-between gap-2 py-2",
        )}
      >
        <Link href={"/"} className={"z-20"}>
          <b>SARVAHA</b>
        </Link>
        <div
          className="z-20 flex size-10 items-center justify-center rounded-full bg-primary-1 text-color-1 hover:cursor-pointer"
          onClick={() => setMenuDrawerOpen((prev) => !prev)}
        >
          {menuDrawerOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
