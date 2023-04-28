import TextLink from "./TextLink";
export default {
  title: "TextLink",
  component: TextLink,
  tags: ["autodocs"],
  args: {
    text: "Text Link",
    href: "https://cat-bounce.com/",
  },
};

const Template = (args) => <TextLink {...args} />;

const Standard = Template.bind({});

export { Standard };
