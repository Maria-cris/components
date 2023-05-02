import SocialMedia from "./SocialMedia.js";
export default {
  title: "SocialMedia",
  component: SocialMedia,
  tags: ["autodocs"],
  args: {},
};

const Template = (args) => <SocialMedia {...args} />;

const Standard = Template.bind({});

export { Standard };