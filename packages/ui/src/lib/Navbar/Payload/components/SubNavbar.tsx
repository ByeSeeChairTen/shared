"use client";
import { useEffect, useRef, useState } from "react";
import { SubnavbarItem } from "../Navbar";
import { LinkSubItem } from "./LinksSubItem";
import { DefaultSubItem } from "./defaultSubItem";

interface SubNavbarProps {
  title: string;
  items: SubnavbarItem[];
}

export const SubNavbar = (props: SubNavbarProps) => {
  const { title, items } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (containerRef.current) {
      setHeight(`${containerRef.current.getBoundingClientRect().height}px`);
    }
  }, [items]);

  return (
    <>
      <div
        ref={containerRef}
        style={{ bottom: `-${height}` }}
        className="absolute z-10 cursor-default flex bg-black w-screen justify-center px-8 py-6 left-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 ease-in-out"
      >
        <div className="container max-w-7xl flex gap-6">
          <div className="text-white max-w-[250px] text-xl font-light">
            {title}
          </div>
          <div
            className={`grid w-full gap-6 ${
              items.length <= 3 ? "grid-cols-3" : "grid-cols-4"
            }`}
          >
            {items.map((subItem, i) => {
              const staggeredDelay = i * 100 + "ms";
              if ("subtitle" in subItem && "href" in subItem) {
                return (
                  <DefaultSubItem
                    key={i}
                    subItem={subItem}
                    staggeredDelay={staggeredDelay}
                  />
                );
              } else if ("links" in subItem) {
                return <LinkSubItem key={i} subItem={subItem} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <div className="absolute z-0 bg-black/70 backdrop-blur-sm pointer-events-none left-0 right-0 top-20 bottom-0 h-screen w-screen opacity-0 transition group-hover:opacity-100 duration-100 transition-delay-200"></div>
    </>
  );
};
