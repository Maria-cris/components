import BannerNumber from "./BannerNumber.js";
export default {
  title: "BannerNumber",
  component: BannerNumber,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo BannerNumber",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    overlay: "",
    contentVariant: "dark",
    numbers: [
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
        theme: "light",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
        theme: "light",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
        theme: "light",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
        theme: "light",
      },
    ],
  },
  argTypes: {
    contentVariant: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    overlay: {
      options: ["dark", "light", ""],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <BannerNumber {...args} />;

const Standard = Template.bind({});

export { Standard };
