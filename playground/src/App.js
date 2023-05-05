import logo from "./logo.svg";
import "./App.css";
import { MenuMobile } from "../../packages/components/src/molecules/MenuMobile/index.js";
import { Card } from "@lottus-ed/components";
import { Button } from "@lottus-ed/components";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(null);

  const itemsData = [
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
  ];
  return (
    <div className="App">
      <MenuMobile
        itemsData={itemsData}
        sub={false}
        btn={{ id: "btn", label: "Pedir información", type: "primary" }}
      />
      {/* <Card
        title="Card"
        text="text"
        imageUrl="https://wallpapercave.com/wp/wp2599594.jpg"
      /> */}
      <Button
        id="btn"
        label={count}
        type="primary"
        size="lg"
        onClick={() => setCount("hola")}
      />
    </div>
  );
}

export default App;
