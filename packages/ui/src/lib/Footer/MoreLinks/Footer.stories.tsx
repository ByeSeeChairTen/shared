import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Footer/More links",
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    navItems: [
      {
        title: "Company",
        links: [
          {
            label: "Products",
            href: "/",
          },
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "About",
            href: "/about",
          },
          {
            label: "Contact",
            href: "/contact",
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            label: "Privacy Policy",
            href: "/privacy",
          },
          {
            label: "Terms of Service",
            href: "/terms",
          },
          {
            label: "Cookie Policy",
            href: "/cookie",
          },
        ],
      },
      {
        title: "Support",
        links: [
          {
            label: "Help",
            href: "/help",
          },
          {
            label: "FAQ",
            href: "/faq",
          },
          {
            label: "Support",
            href: "/support",
          },
        ],
      },
    ],
    logo: {
      url: "https://placehold.co/170x64",
      alt: "Company logo",
    },
    description:
      "We're a company that does stuff and things. We're the best at it. Try us!",
    bottomLinks: [
      {
        label: "Privacy Policy",
        href: "/privacy",
      },
      {
        label: "Terms of Service",
        href: "/terms",
      },
      {
        label: "Cookie Policy",
        href: "/cookie",
      },
    ],
    socialLinks: [
      {
        type: "facebook",
        href: "https://facebook.com",
      },
      {
        type: "x",
        href: "https://twitter.com",
      },
      {
        type: "instagram",
        href: "https://instagram.com",
      },
    ],
    copy: "© 2021 Company. All rights reserved.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Navbar!/gi)).toBeTruthy();
  },
};
