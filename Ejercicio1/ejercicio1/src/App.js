import "./App.css";
import { useState } from "react";
import Listas from "./component/list";

function App() {
  const { setLista } = useState();
  setLista();

  return (
    <div className="App">
      <Listas />
    </div>
  );
}

export default App;
