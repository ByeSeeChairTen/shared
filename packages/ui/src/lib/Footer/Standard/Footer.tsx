import React from "react";

export interface FooterProps {
  logo: {
    url: string;
    alt: string;
  };
  cta: {
    text: string;
    button: {
      text: string;
      href: string;
    };
  };
  navItems: {
    label: string;
    href: string;
  }[];
  copy: string;
}

export function Footer(props: FooterProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 border-b border-gray-700 items-center">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                <a className="inline-block" href="#">
                  <img
                    className="h-16"
                    src={props.logo.url}
                    alt={props.logo.alt}
                  />
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="sm:flex -mb-4 items-center lg:justify-end">
                  <span className="inline-block text-white mb-4 mr-8">
                    {props.cta.text}
                  </span>
                  <a
                    className="relative group inline-block w-full hover:bg-white sm:w-auto py-3 px-5 mb-4 text-center text-sm font-semibold text-white hover:text-black border border-white bg-transparent rounded-md overflow-hidden transition"
                    href={props.cta.button.href}
                  >
                    <span className="relative">{props.cta.button.text}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-14 flex-wrap items-center justify-center gap-12">
            {props.navItems.map((item) => (
              <div>
                <a
                  className="inline-block hover:text-white hover:underline text-white/80"
                  href={item.href}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="text-white/50">{props.copy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
