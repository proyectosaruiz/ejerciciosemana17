const Listas = (props) => {
  const handlerclick = (event) => {
    console.log(event.target.value);
  };
  const liElements = props.data.map((item) => {
    if (item.done === true) {
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
