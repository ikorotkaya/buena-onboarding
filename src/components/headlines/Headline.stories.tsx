import { Meta, Story } from "@storybook/react";
import Headline, { HeadlineProps } from "./Headline";

export default {
  component: Headline,
  title: "Components/Headline"
} as Meta;

const Template: Story<HeadlineProps> = (args) => {
  return <Headline {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: "1",
  children: "Default Headline Level 1"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  type: "2",
  style: "3xl",
  children: "Default Headline Level 2"
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  type: "1",
  style: "3xl",
  children: "Custom Headline"
};
