import Color from "./Color";

export default {
  title: "colors",
  component: Color,
  tags: ["autodocs"],
  args: { paletteName: "primary" },
  argTypes: {
    paletteName: {
      options: ["primary", "neutral", "outstanding"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Color {...args} />;

const Standard = Template.bind({});

export { Standard };
