import Accordion from "./Accordion";
export default {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    itemsData: [
      {
        data: {
          title: "Item 1",
          content: "content",
          icon: { iconName: "people", type: "outlined" },
          text: "texto",
        },
        open: true,
        borderDownOn: false,
        ColorClass: "border-neutral-400 bg-neutral-300",
      },
      {
        data: {
          title: "Item 1",
          content: "content",
          icon: { iconName: "people", type: "outlined" },
          text: "texto",
        },
        open: true,
        borderDownOn: true,
        ColorClass: "border-primary-500",
      },
    ],
    oneItemOpen: true,
  },
};

const Template = (args) => <Accordion {...args} />;

const Standard = Template.bind({});

export { Standard };
