import {
  DefaultSubnavbarItem,
  LinksSubnavbarItem,
  SubnavbarItem,
} from "../Navbar";

interface SubItemProps {
  subItem: LinksSubnavbarItem;
  staggeredDelay?: string;
}

export const LinkSubItem = (props: SubItemProps) => (
  <div
    style={{ animationDelay: props.staggeredDelay }}
    className={`text-white h-full flex flex-col gap-2 pt-1 relative opacity-0 group-hover:animate-slidein`}
  >
    <p className="font-light text-sm tracking-widest text-white/80">{props.subItem.title}</p>

    {props.subItem.links.map((link) => (
      <a
        href={link.href}
        className="text-white/80 hover:text-white transition-colors group/link flex items-center"
      >
        <p className="text-base font-medium tracking-[0.14px]">{link.title}</p>
        {link.opensInNewTab && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-3 h-3 group-hover/link:-rotate-45 group-hover/link:-translate-y-0.5 ml-1 transition-transform duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </a>
    ))}
  </div>
);

export const LinkMobileSubItem = (props: SubItemProps) => (
  <div
    key={props.subItem.title}
    className={`text-white border h-full w-full flex p-5 border-white/20 border-b-transparent flex-col items-start gap-y-2`}
  >
    <span className="text-sm font-light text-white/80 tracking-wide">{props.subItem.title}</span>
    <div className="grid grid-cols-1 gap-4 mt-2 text-lg text-medium tracking-wide">
      {props.subItem.links.map((link) => (
        <a
          href={link.href}
          className="text-white/80 hover:text-white transition-colors"
        >
          {link.title}
        </a>
      ))}
    </div>
  </div>
);
