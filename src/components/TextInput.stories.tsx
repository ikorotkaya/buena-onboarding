import { Meta, Story } from "@storybook/react";
import TextInput, { TextInputProps } from "./TextInput";

export default {
  component: TextInput,
  title: "Components/TextInput"
} as Meta;

const Template: Story<TextInputProps> = (args) => {
  return <TextInput {...args} />;
};

export const Name = Template.bind({});
Name.args = {
  placeholder: "Jane Smith",
  defaultValue: "",
  type: "text"
};

export const Email = Template.bind({});
Email.args = {
  placeholder: "you@example.com",
  defaultValue: "",
  type: "email"
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  placeholder: "+49 123 456 7890",
  defaultValue: "",
  type: "text"
};
