const Listas = (props) => {
  const handlerclick = (event) => {
    //la propiedad de un evento llamado target nos da informacion de elementos del checkbox donde
    //ha ocurrido el evento
    const id = event.target.value;
    const checkboxSelect = props.data.findIndex((item) => {
      //cual es el la posicion del id clickado
      //retornamos
      return item.id == id; //Lo compraramos con cada objeto de arays
    });
    const dataList = props.data;

    dataList[checkboxSelect].done = !dataList[checkboxSelect].done;

    props.handlerLista(dataList);
  };

  const liElements = props.data.map((item) => {
    if (item.done === true) {
      //onChange es un elementos de html
      return (
        <li className="done" key={item.id}>
          <input type="checkbox" value={item.id} onChange={handlerclick} />
          {item.task}
        </li>
      );
    }
    return (
      <li key={item.id}>
        <input type="checkbox" value={item.id} onChange={handlerclick} />
        {item.task}
      </li>
    );
  });
  return <ul>{liElements}</ul>;
};

export default Listas;
