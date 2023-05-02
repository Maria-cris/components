import BannerContent from "./BannerContent.js";
export default {
  title: "BannerContent",
  component: BannerContent,
  tags: ["autodocs"],
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
  argTypes: {
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
    position: {
      options: [
        "left-top",
        "left-middle",
        "left-bottom",
        "center-top",
        "center-middle",
        "center-bottom",
        "right-top",
        "right-middle",
        "right-bottom",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <BannerContent {...args} />;

const Standard = Template.bind({});

export { Standard };
