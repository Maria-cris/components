import Button from "./Button.js";
import "../../index.css";
export default {
  title: "Button",
  component: Button,
  args: {
    id: "button",
    label: "Demo Button",
    type: "primary",
    size: "small",
  },
};

const Template = (args) => <Button {...args} />;

const Standard = Template.bind({});

export { Standard };
