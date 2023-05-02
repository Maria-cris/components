import Cards from "./Cards.js";
export default {
  title: "Cards",
  component: Cards,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Cards",
    text: "Demo Cards",
    subtitle: "subtitle",
    type: "horizontal",
    link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
  },
  argTypes: {
    type: {
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Cards {...args} />;

const Standard = Template.bind({});

export { Standard };
