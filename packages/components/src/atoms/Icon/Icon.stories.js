import Icon from "./Icon.js";
import "../../index.css";
export default {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    iconName: "home",
  },
};

const Template = (args) => <Icon {...args} />;

const Standard = Template.bind({});

export { Standard };
