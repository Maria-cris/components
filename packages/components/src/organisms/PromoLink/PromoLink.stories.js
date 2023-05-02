import PromoLink from "./PromoLink.js";
export default {
  title: "PromoLink",
  component: PromoLink,
  tags: ["autodocs"],
  args: {
    route: "https://wallpapercave.com/wp/wp2599594.jpg",
    text: "Demo PromoLink",
  },
};

const Template = (args) => <PromoLink {...args} />;

const Standard = Template.bind({});

export { Standard };
