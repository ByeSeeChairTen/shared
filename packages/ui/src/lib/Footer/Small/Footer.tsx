interface FooterProps {
  logo: {
    url: string;
    alt: string;
  };
  navItems: {
    label: string;
    href: string;
  }[];
  email: string;
  copy: string;
  bottomLinks: {
    label: string;
    href: string;
  }[];
}

export const Footer = (props: FooterProps) => (
  <section className="py-16 bg-black overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap lg:items-center -m-6">
        <div className="w-full md:w-auto p-6">
          <img src={props.logo.url} alt={props.logo.alt} className="h-12" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <ul className="flex flex-wrap -m-5">
            {props.navItems.map((item) => (
              <li className="p-5" key={item.label}>
                <a
                  className="font-heading text-base text-white hover:text-gray-200"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-auto md:ml-auto p-6">
          <div className="flex flex-wrap items-center -m-1.5">
            <div className="w-auto p-1.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="w-auto p-1.5">
              <h3 className="font-heading font-medium text-base text-white">
                <a
                  className="hover:text-gray-200"
                  href={`mailto:${props.email}`}
                >
                  {props.email}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="py-9">
        <div className="border-b border-gray-800"></div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-auto p-6">
          <p className="text-sm text-gray-300">{props.copy}</p>
        </div>
        <div className="w-auto p-6">
          <div className="flex flex-wrap gap-6">
            {props.bottomLinks.map((link) => (
              <a
                className="text-gray-300 hover:text-gray-400 text-sm"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
