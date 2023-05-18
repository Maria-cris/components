import LeaderBoard from "./LeaderBoard";
export default {
  title: "LeaderBoard",
  component: LeaderBoard,
  tags: ["autodocs"],
  args: {
    imgUrl: "https://wallpapercave.com/wp/wp2951423.png",
    title: "Contacta con el área de Titulación",
    variant: "light",
    links: [
      {
        type: "phone",
        value: "8441121234",
        text: "844-342-23-23",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        type: "mail",
        value: "lottusExample@mail.com",
        text: "lottusExample@mail.com",
        icon: { iconName: "mail", type: "solid" },
        target: "_blank",
      },
      {
        type: "phone",
        value: "8441121234",
        text: "844-342-23-23",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        type: "phone",
        value: "8441121234",
        text: "844-342-23-23",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        type: "phone",
        value: "8441121234",
        text: "844-342-23-23",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
    ],
    button: {
      label: "Consultar",
      variant: "outlined-negative",
      size: "xsm",
    },
  },
};

const Template = (args) => <LeaderBoard {...args} />;

const Standard = Template.bind({});

export { Standard };
