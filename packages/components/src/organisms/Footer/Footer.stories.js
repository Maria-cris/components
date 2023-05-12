import Footer from "./Footer";
export default {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    logoUrl:
      "https://1.bp.blogspot.com/-ilM0ThnMs_s/WIVtiNb1qOI/AAAAAAAADEw/1fY4kvXEJdQm_IKoBFI4iVQfWoF9GqEaACPcB/s1600/uane%2Bmatamoros%2Blogo%2Bgota%2Bde%2Bagua.png",
    newsletter: {
      text: "¡Suscríbete a nuestro newsletter!",
      inputTxt: "Correo electrónico",
      btn: {
        label: "Enviar",
        onclick: () => {},
      },
      inputName: "mail",
    },
    textLinks: [
      {
        text: "Text Link",
        href: "https://www.nba.com/playoffs/2023",
        iconName: "arrow_forward_ios",
      },
      {
        text: "Text Link",
        href: "https://www.nba.com/playoffs/2023",
        iconName: "arrow_forward_ios",
      },
    ],
    links: [
      [
        {
          titleSection: "Estudiantes",
          linktext: [
            {
              text: "SIAAF",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "ULA Online",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Biblioteca virtual E-libro",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Servicios Escolares",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Alumnos",
              href: "https://www.nba.com/playoffs/2023",
            },
          ],
        },
        {
          titleSection: "Egresados",
          linktext: [
            {
              text: "Egresados",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Egresados talento",
              href: "https://www.nba.com/playoffs/2023",
            },
          ],
        },
      ],
      [
        {
          titleSection: "Admisiones",
          linktext: [
            {
              text: "Solicita informes",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Becas",
              href: "https://www.nba.com/playoffs/2023",
            },
          ],
        },
        {
          titleSection: "Oferta eduactiva",
          linktext: [
            {
              text: "Bachillerato",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Licenciaturas",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Maestrías",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Extension Universitaria",
              href: "https://www.nba.com/playoffs/2023",
            },
          ],
        },
      ],
      [
        {
          titleSection: "Nosotros",
          linktext: [
            {
              text: "Oferta Educativa",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Internacionalización",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Somos ULA",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Vida estudiantil",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Planteles",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Modelo educativo",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Empleabilidad",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Vinculación empresarial",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "CESEPCOM",
              href: "https://www.nba.com/playoffs/2023",
            },
            {
              text: "Acceso para colaboradores",
              href: "https://www.nba.com/playoffs/2023",
            },
          ],
        },
      ],
      [
        {
          titleSection: "",
          linktext: [
            {
              text: "Text Link",
              href: "https://www.nba.com/playoffs/2023",
            },
          ],
        },
      ],
    ],
    contact: {
      text: "Síguenos en redes sociales",
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
      phoneText: "Llámanos",
      phoneNumber: "0000 000 000",
      icon: { iconName: "call" },
    },
  },
};

const Template = (args) => <Footer {...args} />;

const Standard = Template.bind({});

export { Standard };
