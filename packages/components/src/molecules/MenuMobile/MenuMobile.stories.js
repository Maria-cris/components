import MenuMobile from "./MenuMobile.js";
export default {
  title: "MenuMobile",
  component: MenuMobile,
  tags: ["autodocs"],
  args: {
    itemsData: [
      {
        label: "Estudiantes",
        route: "https://www.howmanypeopleareinspacerightnow.com/",
        active: false,
        children: [
          {
            label: "SIAAF",
            route:
              "https://www.uteg.edu.mx/colaboradores-uteg/bienvenidos-a-siaaf/",
            active: false,
          },
          {
            label: "UTEG Online",
            route: "/",
            active: false,
          },
          {
            label: "Biblioteca virtual E-libro",
            route: "https://biblioteca.uteg.edu.mx/",
            active: false,
          },
          {
            label: "Servicios escolares",
            route:
              "https://www.uteg.edu.mx/colaboradores-uteg/servicios-escolares/",
            active: false,
          },
          {
            label: "Alumnos",
            route: "/alumnos",
            active: false,
          },
        ],
      },
      {
        label: "Egresados",
        route: "https://www.flightradar24.com/39.78,-103.34/7",
        active: false,
        children: [
          {
            label: "Egresados",
            route: "/egresados",
            active: false,
          },
          {
            label: "Egresados talento",
            route: "/egresados/talento",
            active: false,
          },
        ],
      },
      {
        label: "Admisiones",
        route: "/admisiones",
        active: true,
        children: [
          {
            label: "Solicita informes",
            active: true,
            route: "/admisiones/pedir-informacion",
          },
          {
            label: "Becas",
            route: "/admisiones/becas",
            active: false,
          },
        ],
      },
      {
        label: "Oferta educativa",
        route: "/oferta-educativa",
        active: false,
        children: [
          {
            label: "Bachillerato",
            route: "/oferta-educativa/bachillerato",
            active: false,
          },
          {
            label: "Licenciaturas",
            route: "/oferta-educativa/licenciatura",
            active: false,
          },
          {
            label: "Maestrías",
            route: "/oferta-educativa/maestria",
            active: false,
          },
          {
            label: "Extensión Universitaria",
            route: "/extension-universitaria",
            active: false,
          },
          {
            label: "UTEG Virtual",
            route: "https://utegvirtual.com/",
            active: true,
          },
        ],
      },
      {
        label: "Nosotros",
        route: "/nosotros",
        active: false,
        children: [
          {
            label: "Internacionalización",
            active: true,
            route: "/nosotros/internacionalizacion",
          },
          {
            label: "Somos UTEG",
            route: "/nosotros",
            active: false,
          },
          {
            label: "Vida estudiantil",
            route: "/nosotros/vida-estudiantil",
            active: false,
          },
          {
            label: "Planteles",
            route: "/nosotros/planteles",
            active: false,
          },
          {
            label: "Modelo educativo",
            route: "/nosotros/modelo-educativo",
            active: false,
          },
          {
            label: "Bolsa de Talento",
            route: "/nosotros/bolsa-de-talento",
            active: false,
          },
          {
            label: "Vinculación empresarial",
            route: "/nosotros/vinculacion-empresarial",
            active: false,
          },
          {
            label: "CESEPCOM",
            route: "/nosotros/CESEPCOM",
            active: false,
          },
          {
            label: "Accesos para colaboradores",
            route: "/nosotros/accesos-colaboradores",
            active: false,
          },
        ],
      },
      {
        label: "Contacto",
        route: "/contactanos",
        active: false,
        children: [
          {
            label: "Línea segura",
            route: "https://lineasegura.uane.edu.mx/",
            active: true,
          },
          {
            label: "Preguntas frecuentes",
            route: "/contactanos/faq/general",
            active: false,
          },
          {
            label: "Envíanos un mensaje",
            route: "/contactanos",
            active: false,
          },
        ],
      },
      {
        label: "Blog",
        route: "/blog",
        active: true,
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
