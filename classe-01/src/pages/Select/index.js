import "./style.css";
import { useState } from "react";

function Select() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [select, setSelect] = useState("");
  const [options, setOptions] = useState([
    { id: "0", value: "1", name: "Matemática" },
    { id: "1", value: "2", name: "Português" },
    { id: "2", value: "3", name: "Ciências" },
    { id: "3", value: "4", name: "Física" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
  };

  const handleChangeSelect = (e) => {
    const localOptions = [...options];

    const myOption = localOptions.find((item) => item.id === e.target.value);

    setSelect(myOption.name);
  };

  return (
    <div className="App">
      <div className="container-main">
        <h1>Formulário</h1>
        <form onSubmit={handleSubmit}>
          {select}
          <select onChange={(e) => handleChangeSelect(e)}>
            {options.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <button type="submit">Salvar</button>
          <button
            type="button"
            onClick={() => {
              setError("");
              setSuccess("");
            }}
          >
            Limpar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Select;
