import Card from "./Card";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta; 

type Story = StoryObj<typeof Card>; 

export const Default: Story = {
  args: {
    
  },
};