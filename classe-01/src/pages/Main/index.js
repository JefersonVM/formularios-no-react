import "./style.css";
import { useState } from "react";

function Main() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name || !age || !password) {
      setError("Preencha todos os campos");
      return;
    }

    if (age < 18) {
      setError("Você precisa ser maior de idade");
      return;
    }

    if (password.length < 6) {
      setError("A senha precisa ter no mínimo 6 caracteres");
      return;
    }

    setSuccess("Formulário enviado com sucesso");

    setName("");
    setAge("");
    setPassword("");
  };

  return (
    <div className="App">
      <div className="container-main">
        <form onSubmit={handleSubmit}>
          <h1>Formulário</h1>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Digite sua idade"
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span className="error">{error}</span>}
          {success && <span className="success">{success}</span>}

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
