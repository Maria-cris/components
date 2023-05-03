import Slider from "./Slider.js";
export default {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    slides: [
      {
        url: "https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",
        title: "Conviértete en profesional a tu ritmo",
        text: "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        button: {
          id: "button",
          type: "primary",
          label: "Conoce más",
          size: "lg",
          icon: "",
          disabled: false,
          isExpand: false,
        },
        Position: "top-left",
        overlay: "light",
      },
      {
        url: "http://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg",
        title: "Conviértete en profesional a tu ritmo",
        text: "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        button: {
          id: "button",
          type: "primary",
          label: "Conoce más",
          size: "lg",
          icon: "",
          disabled: false,
          isExpand: false,
        },
        Position: "top-center",
      },
      {
        url: "http://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg",
        title: "Conviértete en profesional a tu ritmo",
        text: "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        button: {
          id: "button",
          type: "primary",
          label: "Conoce más",
          size: "lg",
          icon: "",
          disabled: false,
          isExpand: false,
        },
        Position: "top-right",
        overlay: "dark",
      },
    ],
  },
};

const Template = (args) => <Slider {...args} />;

const Standard = Template.bind({});

export { Standard };
