import MenuMobile from "./MenuMobile.js";
export default {
  title: "MenuMobile",
  component: MenuMobile,
  tags: ["autodocs"],
  args: {
    itemsData: [
      {
        label: "Estudiantes",
        principal: true,
        route: "",
        external: false,
        children: [
          {
            label: "SIAAF",
            principal: false,
            route:
              "https://www.uteg.edu.mx/colaboradores-uteg/bienvenidos-a-siaaf/",
            external: true,
          },
          {
            label: "UTEG Online",
            principal: false,
            route: "/",
            external: false,
          },
          {
            label: "Biblioteca virtual E-libro",
            principal: false,
            route: "https://biblioteca.uteg.edu.mx/",
            external: true,
          },
          {
            label: "Servicios escolares",
            principal: false,
            route:
              "https://www.uteg.edu.mx/colaboradores-uteg/servicios-escolares/",
            external: false,
          },
          {
            label: "Alumnos",
            principal: false,
            route: "/alumnos",
            external: false,
          },
        ],
      },
      {
        label: "Egresados",
        principal: true,
        route: "",
        external: false,
        children: [
          {
            label: "Egresados",
            principal: false,
            route: "/egresados",
            external: false,
          },
          {
            label: "Egresados talento",
            principal: false,
            route: "/egresados/talento",
            external: false,
          },
        ],
      },
      {
        label: "Admisiones",
        principal: true,
        route: "/admisiones",
        active: true,
        children: [
          {
            label: "Solicita informes",
            principal: false,
            active: true,
            route: "/admisiones/pedir-informacion",
            external: false,
          },
          {
            label: "Becas",
            principal: false,
            route: "/admisiones/becas",
            external: false,
          },
        ],
      },
      {
        label: "Oferta educativa",
        principal: true,
        route: "/oferta-educativa",
        external: false,
        children: [
          {
            label: "Bachillerato",
            principal: false,
            route: "/oferta-educativa/bachillerato",
            external: false,
          },
          {
            label: "Licenciaturas",
            principal: false,
            route: "/oferta-educativa/licenciatura",
            external: false,
          },
          {
            label: "Maestrías",
            principal: false,
            route: "/oferta-educativa/maestria",
            external: false,
          },
          {
            label: "Extensión Universitaria",
            principal: false,
            route: "/extension-universitaria",
            external: false,
          },
          {
            label: "UTEG Virtual",
            principal: false,
            route: "https://utegvirtual.com/",
            external: true,
          },
        ],
      },
      {
        label: "Nosotros",
        principal: true,
        route: "/nosotros",
        external: false,
        iconActive: true,
        children: [
          {
            label: "Internacionalización",
            principal: false,
            active: true,
            route: "/nosotros/internacionalizacion",
            external: false,
          },
          {
            label: "Somos UTEG",
            principal: false,
            route: "/nosotros",
            external: false,
          },
          {
            label: "Vida estudiantil",
            principal: false,
            route: "/nosotros/vida-estudiantil",
            external: false,
          },
          {
            label: "Planteles",
            principal: false,
            route: "/nosotros/planteles",
            external: false,
          },
          {
            label: "Modelo educativo",
            principal: false,
            route: "/nosotros/modelo-educativo",
            external: false,
          },
          {
            label: "Bolsa de Talento",
            principal: false,
            route: "/nosotros/bolsa-de-talento",
            external: false,
          },
          {
            label: "Vinculación empresarial",
            principal: false,
            route: "/nosotros/vinculacion-empresarial",
            external: false,
          },
          {
            label: "CESEPCOM",
            principal: false,
            route: "/nosotros/CESEPCOM",
            external: false,
          },
          {
            label: "Accesos para colaboradores",
            principal: false,
            route: "/nosotros/accesos-colaboradores",
            external: false,
          },
        ],
      },
      {
        label: "Contacto",
        principal: true,
        route: "/contactanos",
        external: false,
        children: [
          {
            label: "Línea segura",
            principal: false,
            route: "https://lineasegura.uane.edu.mx/",
            external: true,
          },
          {
            label: "Preguntas frecuentes",
            principal: false,
            route: "/contactanos/faq/general",
            external: false,
          },
          {
            label: "Envíanos un mensaje",
            principal: false,
            route: "/contactanos",
            external: false,
          },
        ],
      },
      {
        label: "Blog",
        principal: true,
        route: "/blog",
        active: true,
        external: false,
        children: [],
      },
    ],
    submenuM: false,
    btn: {
      id: "MenuMobileBtn",
      label: "Pedir información",
      type: "primary",
      onClick: () => {},
    },
  },
};

const Template = (args) => <MenuMobile {...args} />;

const Standard = Template.bind({});

export { Standard };
