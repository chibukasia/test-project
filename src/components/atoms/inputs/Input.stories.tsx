import Input from "./Input";
import { Meta, StoryObj, } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: "Components/Atoms/Inputs/Input",
  component: Input,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  tags:['autodocs']
};

export default meta;    

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Enter name",
    label: 'Name',
  },
};

export const InputWithError: StoryObj<typeof Input> = {
  args: {
    placeholder: "Enter name",
    error: 'Name is required',
    label: 'Name'
  },
};

export const PasswordInputType: StoryObj<typeof Input> ={
    args: {
        type: 'password',
        placeholder: "Enter password",
        label: 'Password'
    }
}