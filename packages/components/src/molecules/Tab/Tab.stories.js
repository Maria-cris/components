import Tab from "./Tab";
export default {
  title: "Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    label: "Text Link",
    active: true,
    iconName: "home",
  },
};

const Template = (args) => <Tab {...args} />;

const Standard = Template.bind({});

export { Standard };
