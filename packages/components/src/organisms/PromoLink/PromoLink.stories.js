import PromoLink from "./PromoLink.js";
export default {
  title: "PromoLink",
  component: PromoLink,
  tags: ["autodocs"],
  args: {
    link: "https://www.caffeineinformer.com/death-by-caffeine",
    text: "Demo PromoLink",

    color: "color1",
    className: "",
  },
  argTypes: {
    color: {
      options: [
        "color1",
        "color2",
        "color3",
        "color4",
        "color5",
        "color6",
        "color7",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <PromoLink {...args} />;

const Standard = Template.bind({});

export { Standard };
