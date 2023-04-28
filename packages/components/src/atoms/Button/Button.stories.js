import Button from "./Button.js";
import "../../index.css";
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
  },
};

const Template = (args) => <Button {...args} />;

const Standard = Template.bind({});

export { Standard };
