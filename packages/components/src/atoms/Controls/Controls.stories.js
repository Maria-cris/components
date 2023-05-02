import Controls from "./Controls.js";
export default {
  title: "Controls",
  component: Controls,
  tags: ["autodocs"],
  args: {
    iconName: "arrow_forward_ios",
  },
};

const Template = (args) => <Controls {...args} />;

const Standard = Template.bind({});

export { Standard };
