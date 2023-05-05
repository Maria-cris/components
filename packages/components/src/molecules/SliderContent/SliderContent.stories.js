import SliderContent from "./SliderContent.js";
export default {
  title: "SliderContent",
  component: SliderContent,
  tags: ["autodocs"],
  args: {
    title: "Demo SliderContent",
    text: "Demo SliderContent",
    btn: {
      id: "banner-button",
      label: "button",
      type: "primary",
      size: "xsm",
    },
    position: "left-top",
    className: "",
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

const Template = (args) => <SliderContent {...args} />;

const Standard = Template.bind({});

export { Standard };
