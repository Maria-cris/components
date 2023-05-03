import Carrusel from "./Carrusel.js";
export default {
  title: "Carrusel",
  component: Carrusel,
  tags: ["autodocs"],
  args: {},
};

const Template = (args) => <Carrusel {...args} />;

const Standard = Template.bind({});

export { Standard };
