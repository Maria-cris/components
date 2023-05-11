import Accordion from "./Accordion";
export default {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    itemsData: [
      {
        title: "Item 1",
        content: "content",
        icon: { iconName: "people", type: "outlined" },
        text: "texto",
        open: true,
      },
      {
        title: "Item 1",
        content: "content",
        icon: { iconName: "people", type: "outlined" },
        text: "texto",
        open: true,
      },
    ],
  },
};

const Template = (args) => <Accordion {...args} />;

const Standard = Template.bind({});

export { Standard };
