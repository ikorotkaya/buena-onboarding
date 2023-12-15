import { Meta, Story } from "@storybook/react";
import SecondaryButton, { SecondaryButtonProps } from "./SecondaryButton";

export default {
  component: SecondaryButton,
  title: "Components/SecondaryButton"
} as Meta;

const Template: Story<SecondaryButtonProps> = (args) => {
  return <SecondaryButton {...args}>Your Button Text</SecondaryButton>;
};

export const Enabled = Template.bind({});
