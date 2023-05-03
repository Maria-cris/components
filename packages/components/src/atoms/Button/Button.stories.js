import Button from "./Button.js";
export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    id: "button",
    label: "Demo Button",
    type: "primary",
    size: "sm",
    disabled: false,
    isExpand: false,
    icon: "",
    onClick: () => {},
  },
  argTypes: {
    type: {
      options: ["primary", "outlined", "text"],
      control: { type: "select" },
    },
    size: {
      options: ["xsm", "sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

const Standard = Template.bind({});

export { Standard };
