import LoginForm from './Login';
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta<typeof LoginForm> = {
  title: "Components/Molecules/Forms/LoginForm",
  component: LoginForm,
  args: {
    
  },
};

export default meta

export const LoginFormStory: StoryObj<typeof LoginForm> = {
  args: {
  },
  play: async({canvasElement})=>{
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText('Enter email'), 'John@Doe.com', {delay: 200});
    await userEvent.type(canvas.getByPlaceholderText('Enter password'), '1234', {delay: 200});

    await userEvent.click(canvas.getByRole('button'));

    await expect(canvas.getByPlaceholderText('Enter email')).toHaveValue('John@Doeui.com');
    await expect(canvas.getByDisplayValue('1234')).toBeInTheDocument()
  }
}