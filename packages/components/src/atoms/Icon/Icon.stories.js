import Icon from "./Icon.js";
import "../../index.css";
export default {
  title: "Icon",
  component: Icon,
  args: {
    iconName: "home",
  },
};

const Template = (args) => <Icon {...args} />;

const Standard = Template.bind({});

export { Standard };
