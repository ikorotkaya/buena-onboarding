import { Meta, Story } from "@storybook/react";
import NextButton, { NextButtonProps } from "./NextButton";

export default {
  component: NextButton,
  title: "Components/NextButton"
} as Meta;

const Template: Story<NextButtonProps> = (args) => {
  return <NextButton {...args}>Your Button Text</NextButton>;
};

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
