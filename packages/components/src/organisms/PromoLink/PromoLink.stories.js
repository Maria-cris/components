import PromoLink from "./PromoLink.js";
export default {
  title: "PromoLink",
  component: PromoLink,
  tags: ["autodocs"],
  args: {
    route: "https://www.caffeineinformer.com/death-by-caffeine",
    text: "Demo PromoLink",
    className: "",
  },
};

const Template = (args) => <PromoLink {...args} />;

const Standard = Template.bind({});

export { Standard };
