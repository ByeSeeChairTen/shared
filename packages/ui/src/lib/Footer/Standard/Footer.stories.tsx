import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Footer/Standard footer",
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    navItems: [
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
    logo: {
        url: "https://placehold.co/170x64",
        alt: "Company logo",
    },
    cta: {
        text: "Questions? We are here to help!",
        button: {
            text: "Contact us",
            href: "/contact",
        },
    },
    copy: "© 2021 Company. All rights reserved.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Navbar!/gi)).toBeTruthy();
  },
};
