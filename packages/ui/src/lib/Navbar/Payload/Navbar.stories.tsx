import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Navbar/Payload-like navbar",
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    children: "Welcome to Payload Navbar!",
    navItems: [
      {
        label: "Products",
        href: "/",
        subNavbar: {
          title: "Sometimes we get cool ideas, here's some that made it.",
          items: [
            // Three example projects, one app, one website, one ecommerce. Give them fake names and a mission-statement-like subtitle.
            {
              title: "Shoebox",
              subtitle:
                "A mobile app that helps you keep track of your shoe collection.",
              href: "/shoebox",
            },
            {
              title: "Sock Drawer",
              subtitle:
                "Selling a variety of socks, if you can imagine it, they have it.",
              href: "/sockdrawer",
            },
            {
              title: "Bread history foundation",
              subtitle:
                "A non-profit dedicated to the history of bread. They knead your help.",
              href: "/breadhistory",
            },
          ],
        },
      },
      {
        label: "Services",
        href: "/services",
        subNavbar: {
          title: "This is our core offering. No Wordpress, guaranteed.",
          items: [
            {
              title: "CMS driven websites",
              subtitle:
                "We build websites that are easy for both developers and clients to manage.",
              href: "/cms",
            },
            {
              title: "E-commerce",
              subtitle:
                "Fast. Secure. Scalable. No more WooCommerce headaches. We promise.",
              href: "/ecommerce",
            },
            {
              title: "Mobile apps",
              subtitle:
                "Handheld experiences, in the palm of your customers' hands.",
              href: "/mobile",
            },
            {
              title: "SEO",
              subtitle:
                "Get found and get seen. If you're not first, you're last. We'll help you get there.",
              href: "/seo",
            },
          ],
        },
      },
      {
        label: "Why BSCT",
        href: "/why",
      },
      {
        label: "Case Studies",
        href: "/casestudies",
        subNavbar: {
          title: "We've worked on some cool projects, here are a few.",
          items: [
            // Three example projects, one app, one website, one ecommerce. Give them fake names and a mission-statement-like subtitle.
            {
              title: "MOST RECENT",
              links: [
                {
                  title: "Shoebox",
                  href: "/shoebox",
                  opensInNewTab: false,
                },
                {
                  title: "Sock Drawer",
                  href: "/sockdrawer",
                  opensInNewTab: false,
                },
                {
                  title: "Bread history foundation",
                  href: "/breadhistory",
                  opensInNewTab: true
                },
                {
                  title: "Dryer lint art",
                  href: "/dryerlint",
                  opensInNewTab: false
                },
                {
                  title: "Scotch egg sculpting",
                  href: "/scotchegg",
                  opensInNewTab: false
                }
              ],
            },
            {
              title: "DRF", // Not Django, it's Dietisternas riksförbund
              subtitle:
                "Their Wordpress site was buggy, slow and hard to manage. Typical Wordpress. No more headaches and no Wordpress.",
              href: "/cms",
            },
            {
              title: "Cykelkraft",
              subtitle:
                "A power company that generates electricity from bikes. They wanted a website that was as green as their electricity.",
              href: "/ecommerce",
            },
          ],
        },
      },
    ],
    rightItems: (
      <div className="gap-1 sm:gap-4 flex *:flex-shrink-0">
        <button className="text-white py-1.5 px-2 hover:bg-white hover:text-black transition-all rounded-xl">
          New Project
        </button>
        <button className="text-white py-1.5 px-2 max-sm:hidden hover:bg-white hover:text-black transition-all rounded-xl flex items-center gap-x-2">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span className="text-sm">13.4k</span>
        </button>
        <button className="text-white max-sm:hidden py-1.5 px-2 hover:bg-white hover:text-black transition-all rounded-xl">
          {/* Search icon svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Navbar!/gi)).toBeTruthy();
  },
};
