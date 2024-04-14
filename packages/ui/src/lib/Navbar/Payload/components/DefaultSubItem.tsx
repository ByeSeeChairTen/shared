import { DefaultSubnavbarItem, SubnavbarItem } from "../Navbar";

interface SubItemProps {
  subItem: DefaultSubnavbarItem;
  staggeredDelay?: string;
}

export const DefaultSubItem = (props: SubItemProps) => (
  <a href={props.subItem.href}>
    <div
      style={{ animationDelay: props.staggeredDelay }}
      className={`text-white h-full flex flex-col gap-2 group/subnav pt-1 relative opacity-0 group-hover:animate-slidein`}
    >
      <p className="font-semibold text-xl">{props.subItem.title}</p>
      <p className="text-sm tracking-[0.14px]">{props.subItem.subtitle}</p>
      {/* SVG arrow angled up to the right */}
      <div className="flex-1" />
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 group-hover/subnav:-rotate-45 group-hover/subnav:-translate-y-1 -mr-2 mb-2 transition-transform duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="w-0 absolute bottom-0 group-hover/subnav:w-full h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
    </div>
  </a>
);

export const DefaultMobileSubItem = (props: SubItemProps) => (
  <div
    key={props.subItem.title}
    className={`text-white border h-full w-full flex p-5 border-white/20 border-b-transparent text-lg font-medium flex-col items-start gap-y-2`}
  >
    {props.subItem.title}
    <span className="text-sm font-light tracking-wide">
      {props.subItem.subtitle}
    </span>
  </div>
);
