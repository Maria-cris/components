import Heading from "./Heading.js";
import "../../index.css";
export default {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    title: "Demo Heading",
    type: "h-1",
  },
};

const Template = (args) => <Heading {...args} />;

const Standard = Template.bind({});

export { Standard };
