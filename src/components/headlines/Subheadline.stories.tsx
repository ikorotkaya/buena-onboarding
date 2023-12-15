import { Meta, Story } from "@storybook/react";
import Subheadline, { SubheadlineProps } from "./Subheadline";

export default {
  component: Subheadline,
  title: "Components/Subheadline"
} as Meta;

const Template: Story<SubheadlineProps> = (args) => {
  return <Subheadline {...args}>We will contact you shortly.</Subheadline>;
};

export const Default = Template.bind({});
