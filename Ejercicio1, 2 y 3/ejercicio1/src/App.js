import "./App.css";
import { useState } from "react";
import Listas from "./component/Listas";
import Form from "./component/Form";

function App() {
  const [lista, setlista] = useState([
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ]);
  const handlerLista = (value) => {
    setlista([...value]);
  };
  return (
    <>
      <Listas data={lista} handlerLista={handlerLista} />
      <Form />
    </>
  );
}

export default App;
