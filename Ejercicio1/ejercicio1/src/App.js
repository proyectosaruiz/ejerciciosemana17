import "./App.css";
import { useState } from "react";

function App() {
  useState([
    [
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
    ],
  ]);

  return <div className="App"></div>;
}

export default App;
