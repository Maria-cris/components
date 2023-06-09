import Menu from "./Menu.js";
export default {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
  args: {
    languages: false,
    btn: {
      id: "MenuMobileBtn",
      label: "Pedir información",
      type: "primary",
      iconName: "home",
      onClick: () => {},
    },
    className: "",
    data: {
      menus: [
        { label: "Admisiones", route: "/admisiones", active: true, items: [] },
        {
          label: "Oferta Educativa",
          route: "/oferta-educativa",
          active: true,
          items: [
            { label: "Bachillerato", route: "/oferta-educativa/bachillerato" },
            {
              label: "Licenciaturas",
              route: "/oferta-educativa/licenciatura",
              active: true,
            },
            { label: "Maestrías", route: "/oferta-educativa/maestria" },
            {
              label: "Extensión Universitaria",
              route: "/extension-universitaria",
            },
            {
              label: "UTEG Virtual",
              route: "https://utegvirtual.com/",
              external: true,
            },
          ],
        },
        {
          label: "Nosotros",
          route: "/nosotros",
          items: [
            { label: "Somos UTEG", route: "/nosotros" },
            { label: "Planteles", route: "/nosotros/planteles" },
            { label: "Modelo Educativo", route: "/nosotros/modelo-educativo" },
            {
              label: "Internacionalización",
              route: "/nosotros/internacionalizacion",
            },
            { label: "Bolsa de Talento", route: "/nosotros/bolsa-de-talento" },
            { label: "CESEPCOM", route: "/nosotros/CESEPCOM" },
          ],
        },
        { label: "Blog", route: "/blog", items: [] },
      ],
      logotype: {
        src: "https://1.bp.blogspot.com/-ilM0ThnMs_s/WIVtiNb1qOI/AAAAAAAADEw/1fY4kvXEJdQm_IKoBFI4iVQfWoF9GqEaACPcB/s1600/uane%2Bmatamoros%2Blogo%2Bgota%2Bde%2Bagua.png",
        alt: "logotipo-uteg",
      },
      socialMedia: [
        {
          socialName: "instagram",
          alt: "instagram-logo",
          link: "https://www.instagram.com/",
        },
        {
          socialName: "facebook",
          alt: "facebook-logo",
          link: "https://www.facebook.com",
        },
        {
          socialName: "tiktok",
          alt: "tiktok-logo",
          link: "https://www.tiktok.com",
        },
        {
          socialName: "twitter",
          alt: "twitter-logo",
          link: "https://www.twitter.com",
        },
      ],
      menuMobile: [
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
          route: "",
          children: [
            {
              label: "Solicita informes",
              principal: false,
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
          children: [
            {
              label: "Internacionalización",
              principal: false,
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
          external: false,
          children: [],
        },
      ],
    },
  },
};

const Template = (args) => <Menu {...args} />;

const Standard = Template.bind({});

export { Standard };
