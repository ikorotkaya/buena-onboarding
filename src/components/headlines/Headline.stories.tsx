import { Meta, Story } from "@storybook/react";
import Headline, { HeadlineProps } from "./Headline";

export default {
  component: Headline,
  title: "Components/Headline"
} as Meta;

const Template: Story<HeadlineProps> = (args) => {
  return <Headline {...args} />;
};

export const DefaultHeadline = Template.bind({});
DefaultHeadline.args = {
  type: "1",
  children: "Default Headline Level 1"
};

export const DefaultSecondHeadline = Template.bind({});
DefaultSecondHeadline.args = {
  type: "2",
  style: "3xl",
  children: "Default Headline Level 2"
};

export const CustomHeadline = Template.bind({});
CustomHeadline.args = {
  type: "1",
  style: "3xl",
  children: "Custom Headline"
};
