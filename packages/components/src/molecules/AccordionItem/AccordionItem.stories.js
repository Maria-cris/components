import AccordionItem from "./AccordionItem";
export default {
  title: "AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  args: {
    data: {
      title: "Item 1",
      content: "content",
      icon: { iconName: "people", type: "outlined" },
      text: "texto",
      open: true,
    },
  },
};

const Template = (args) => <AccordionItem {...args} />;

const Standard = Template.bind({});

export { Standard };
