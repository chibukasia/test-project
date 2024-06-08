import Button from "./Button";
import { Meta, StoryObj, } from '@storybook/react';
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Buttons/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    title: 'Button',
    variant: "primary",
    onClick: fn()
  },

}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    title: 'Button',
    variant: "secondary"
  }
}

export const OutlineButton: StoryObj<typeof Button> = {
  args: {
    title: 'Outline Button',
    variant: "outline",
    size: 'large'

  }
}
