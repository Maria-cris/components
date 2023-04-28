import Banner from "./Banner.js";
import "../../index.css";
export default {
  title: "Banner",
  component: Banner,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Banner",
    text: "Demo Banner",
    ratio: "4/3",
    overlay: "dark",
    variant: "negative",
    btn: {
      id: "banner-button",
      label: "button",
    },
    position: "left-top",
  },
};

const Template = (args) => <Banner {...args} />;

const Standard = Template.bind({});

export { Standard };
