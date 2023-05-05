import Icon from "./Icon.js";
export default {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    iconName: "home",
    className: "",
  },
};

const Template = (args) => <Icon {...args} />;

const Standard = Template.bind({});

export { Standard };
