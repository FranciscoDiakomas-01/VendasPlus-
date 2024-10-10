import "./index.css";
import { FaUser, FaUsers, FaPaypal, FaCamera } from "react-icons/fa6";
import { useState } from "react";
import l from "../../assets/pngegg (1).png";
export default function Config() {
  const [active, setActive] = useState(1);
  const [update, setUpdate] = useState(1);
  const payWay = [
    {
      name: "Cartão de Dédito",
      id: 12,
      description: "",
    },
    {
      name: "Cartão de Crédito",
      id: 13,
      description: "",
    },
    {
      name: "Cash",
      id: 14,
      description: "",
    },
  ];
  return (
    <main id="config">
      <section>
        {active == 1 ? (
          <>
            {update == 1 ? (
              <aside>
                <img src={l} />
                <article>
                  <span>Nome : Admin</span>
                  <span>Email : Email</span>
                  <span>Categoria : Admin</span>
                  <span>Estatus : Activo</span>
                </article>
                <button
                  onClick={() => {
                    setUpdate(2);
                  }}
                >
                  Actualizar o Perfil
                </button>
              </aside>
            ) : (
              <aside>
                <div id="picture">
                  <input type="file" />
                  <img src={l} />
                  <FaCamera />
                </div>
                <article>
                  <input placeholder="Nome" autoFocus />
                  <input placeholder="Emal" />
                  <input placeholder="Senha" />
                  <input placeholder="Nova Senha" />
                </article>
                <button
                  onClick={() => {
                    setUpdate(1);
                  }}
                >
                  Vizualizar o Perfil
                </button>
              </aside>
            )}
          </>
        ) : active == 2 ? (
          <div id="pay">
            <div>
              <button>Listar</button>
              <button>Cadastrar</button>
            </div>
            <article>
              {payWay.map((pay) => (
                <span key={pay.id}>
                  <div>{pay.name}</div>
                  <div>
                    <strong>{pay.name}</strong>
                    <div>{pay.description}</div>
                  </div>
                </span>
              ))}
            </article>
          </div>
        ) : (
          <></>
        )}
      </section>
      <nav>
        <ul>
          <a
            onClick={() => {
              setActive(1);
            }}
            style={{
              backgroundColor: active == 1 ? "#535bf2" : "",
              color: active == 1 ? "#ffff" : "#535bf2",
            }}
          >
            <FaUser />
            <p>Perfil</p>
          </a>
          <a
            onClick={() => {
              setActive(2);
            }}
            style={{
              backgroundColor: active == 2 ? "#535bf2" : "",
              color: active == 2 ? "#ffff" : "#535bf2",
            }}
          >
            <FaPaypal />
            <p>Pagamentos</p>
          </a>
          <a
            onClick={() => {
              setActive(3);
            }}
            style={{
              backgroundColor: active == 3 ? "#535bf2" : "",
              color: active == 3 ? "#ffff" : "#535bf2",
            }}
          >
            <FaUsers />
            <p>Funcionários</p>
          </a>
        </ul>
      </nav>
    </main>
  );
}
