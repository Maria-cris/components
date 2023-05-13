import Outstanding from "./Outstanding";
export default {
  title: "Outstanding",
  component: Outstanding,
  tags: ["autodocs"],
  args: {
    imageUrl:
      "https://www.smatbot.com/blog/wp-content/uploads/2018/02/Hi-Animation-without-background-.gif",
    title: "Perfil de ingreso",
    imgPosition: "right-top",
    paragraph:
      "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
  },
  argTypes: {
    imgPosition: {
      options: ["right", "left"],
      control: { type: "select" },
    },
    backgroundColor: {
      options: [
        "color1",
        "color2",
        "color3",
        "color4",
        "color5",
        "color6",
        "color7",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Outstanding {...args} />;

const Standard = Template.bind({});

export { Standard };
