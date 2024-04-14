import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Navbar/Wint-like",
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    children: "Welcome to Navbar!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Navbar!/gi)).toBeTruthy();
  },
};
