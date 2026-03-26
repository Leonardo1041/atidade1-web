import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // 🔢 CONTADOR
  const [count, setCount] = useState(0)

  const diminuir = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // 👥 TABELA DE USUÁRIOS
  const [busca, setBusca] = useState("");

  const [users, setUsers] = useState([
    { id: 1, nome: "João", cargo: "Gerente", nivelAcesso: 1 },
    { id: 2, nome: "Maria", cargo: "Analista", nivelAcesso: 2 },
    { id: 3, nome: "Carlos", cargo: "Assistente", nivelAcesso: 3 }
  ]);

  const usersFiltrados = users.filter(user =>
    user.nome.toLowerCase().includes(busca.toLowerCase()) ||
    user.cargo.toLowerCase().includes(busca.toLowerCase())
  );

  function alterarNivel(id, novoNivel) {
    const novosUsuarios = users.map(user =>
      user.id === id
        ? { ...user, nivelAcesso: novoNivel }
        : user
    );

    setUsers(novosUsuarios);
  }

  return (
    <>
      {/* 🔷 SEÇÃO ORIGINAL */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started</h1>
        </div>

        {/* 🔢 CONTADOR */}
        <h2 style={{ color: count > 0 ? "green" : "black" }}>
          Contagem: {count}
        </h2>

        <button onClick={() => setCount(count + 1)}>
          Aumentar
        </button>

        <button onClick={diminuir}>
          Diminuir
        </button>

        <button onClick={() => setCount(0)}>
          Resetar
        </button>

        {count > 10 && (
          <p style={{ color: 'gold' }}>
            Você é um mestre dos cliques!
          </p>
        )}
      </section>

      {/* 👥 TABELA DE USUÁRIOS */}
      <section style={{ padding: "20px" }}>

        <h2>Usuários</h2>

        {/* 🔍 Busca */}
        <input
          type="text"
          placeholder="Buscar por nome ou cargo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <br /><br />

        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Nível</th>
            </tr>
          </thead>

          <tbody>
            {usersFiltrados.map(user => (
              <tr
                key={user.id}
                style={{
                  backgroundColor:
                    user.nivelAcesso === 1 ? "#ffcccc" :
                    user.nivelAcesso === 2 ? "#cce5ff" :
                    "#ccffcc"
                }}
              >
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.cargo}</td>
                <td>
                  <select
                    value={user.nivelAcesso}
                    onChange={(e) => {
                      alert("Nível de acesso alterado!");
                      alterarNivel(user.id, Number(e.target.value));
                    }}
                  >
                    <option value={1}>Admin</option>
                    <option value={2}>Intermediário</option>
                    <option value={3}>Comum</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>

      {/* 🔻 RESTO DO TEMPLATE */}
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App