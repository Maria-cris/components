import BannerContent from "./BannerContent.js";
import "../../index.css";
export default {
  title: "BannerContent",
  component: BannerContent,
  args: {
    title: "Demo BannerContent",
    text: "Demo BannerContent",
    btn: {
      id: "banner-button",
      label: "button",
      type: "primary",
      size: "xsm",
    },
    position: "left-top",
  },
};

const Template = (args) => <BannerContent {...args} />;

const Standard = Template.bind({});

export { Standard };
