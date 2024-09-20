import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

// Meta configuration for the Button component
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    appName: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    appName: "Storybook",
    className: "px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg",
    children: "Click me!",
  },
};

export const Secondary: Story = {
  args: {
    appName: "Docs",
    className: "px-4 py-2 text-white bg-gray-500 hover:bg-gray-700 rounded-lg",
    children: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    appName: "LargeApp",
    className:
      "px-6 py-3 text-white text-xl bg-green-500 hover:bg-green-700 rounded-lg",
    children: "Large Button",
  },
};

export const Small: Story = {
  args: {
    appName: "SmallApp",
    className:
      "px-2 py-1 text-sm text-white bg-red-500 hover:bg-red-700 rounded-md",
    children: "Small Button",
  },
};

export const Disabled: Story = {
  args: {
    appName: "DisabledApp",
    className: "px-4 py-2 text-white bg-gray-300 cursor-not-allowed rounded-lg",
    children: "Disabled Button",
  },
};

export const Custom: Story = {
  args: {
    appName: "CustomApp",
    className:
      "px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-yellow-500 hover:to-pink-500 rounded-lg shadow-lg",
    children: "Custom Styled Button",
  },
};
