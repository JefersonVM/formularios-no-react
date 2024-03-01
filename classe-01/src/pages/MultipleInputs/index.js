import "./style.css";
import { useState } from "react";

function MultipleInputs() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!form.name || !form.age | !form.address || !form.password) {
      setError("Preencha todos os campos");
      return;
    }

    if (form.age < 18) {
      setError("Você precisa ser maior de idade");
      return;
    }

    if (form.password.length < 6) {
      setError("A senha precisa ter no mínimo 6 caracteres");
      return;
    }

    setSuccess("Formulário enviado com sucesso");
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="container-main">
        <form onSubmit={handleSubmit}>
          <h1>Formulário</h1>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={form.name}
            onChange={(e) => handleChangeForm(e)}
          />
          <input
            className="input"
            type="number"
            placeholder="Digite sua idade"
            name="age"
            value={form.age}
            onChange={(e) => handleChangeForm(e)}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu endereço"
            name="address"
            value={form.address}
            onChange={(e) => handleChangeForm(e)}
          />

          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            name="password"
            value={form.password}
            onChange={(e) => handleChangeForm(e)}
          />
          <div className="checkbox">
            <input
              type="checkbox"
              name="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password">Mostrar senha</label>
          </div>
          <strong>Qual período você deseja estudar?</strong>
          <div className="div-radio">
            <input
              type="radio"
              id="manha"
              name="periodo"
              value="manha"
              checked={selectedOption === "manha"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="manha">Manhã</label>

            <input
              type="radio"
              id="tarde"
              name="periodo"
              value="tarde"
              checked={selectedOption === "tarde"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />

            <label htmlFor="tarde">Tarde</label>

            <input
              type="radio"
              id="noite"
              name="periodo"
              value="noite"
              checked={selectedOption === "noite"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="noite">Noite</label>
          </div>

          {error && <span className="error">{error}</span>}
          {success && <span className="success">{success}</span>}

          <button type="submit">Salvar</button>
          <button
            type="button"
            onClick={() => {
              setForm({
                name: "",
                age: "",
                address: "",
                password: "",
              });
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

export default MultipleInputs;
