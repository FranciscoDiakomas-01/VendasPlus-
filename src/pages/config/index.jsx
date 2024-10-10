import "./index.css";
import { FaUser, FaUsers, FaPaypal, FaCamera } from "react-icons/fa6";
import { useState } from "react";
import l from "../../assets/pngegg (1).png";
export default function Config() {
  const [active, setActive] = useState(1);
  const [payActive, setPayActive] = useState(1);
  const [userCategory, setUserCategory] = useState(1);
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
                  <button
                    onClick={() => {
                      setUpdate(1);
                    }}
                  >
                    Vizualizar o Perfil
                  </button>
                  <button
                    onClick={() => {
                      setUpdate(1);
                    }}
                  >
                    Actualizar o Perfil
                  </button>
                </article>
              </aside>
            )}
          </>
        ) : active == 2 ? (
          <div id="pay">
            <div>
              <button
                onClick={() => {
                  setPayActive(1);
                }}
                style={{
                  backgroundColor: payActive == 1 ? "#535bf2 " : "",
                  color: payActive == 1 ? "#ffff " : "",
                }}
              >
                Listar
              </button>
              <button
                style={{
                  backgroundColor: payActive == 2 ? "#535bf2 " : "",
                  color: payActive == 2 ? "#ffff " : "",
                }}
                onClick={() => {
                  setPayActive(2);
                }}
              >
                Cadastrar
              </button>
            </div>
            {payActive == 1 ? (
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
            ) : (
              <form>
                <label htmlFor="name">Nome</label>
                <input
                  placeholder="Nome da Forma de Pagamento"
                  id="name"
                  name="name"
                ></input>
                <label htmlFor="desc">Descrição</label>
                <input
                  placeholder="Descrição da Forma de Pagamento"
                  name="desc"
                  id="desc"
                ></input>
                <button
                  style={{
                    backgroundColor: "#535bf2",
                  }}
                >
                  Cadastrar
                </button>
              </form>
            )}
          </div>
        ) : (
          <>
            <div id="pay">
              <div>
                <button
                  onClick={() => {
                    setUserCategory(1);
                  }}
                  style={{
                    backgroundColor: userCategory == 1 ? "#108850 " : "",
                    color: userCategory == 1 ? "#ffff " : "#108850",
                    border: "1px #108850 solid",
                  }}
                >
                  Listar
                </button>
                <button
                  style={{
                    backgroundColor: userCategory == 2 ? "#108850 " : "",
                    color: userCategory == 2 ? "#ffff " : "#108850",
                    border: "1px #108850 solid",
                  }}
                  onClick={() => {
                    setUserCategory(2);
                  }}
                >
                  Cadastrar
                </button>
              </div>
              {userCategory == 1 ? (
                <article>
                  {payWay.map((pay) => (
                    <span
                      key={pay.id}
                      style={{
                        backgroundColor: "#108850 ",
                      }}
                    >
                      <div>{pay.name}</div>
                      <div>
                        <strong>{pay.name}</strong>
                        <div>{pay.description}</div>
                      </div>
                    </span>
                  ))}
                </article>
              ) : (
                <form>
                  <label htmlFor="name">Nome</label>
                  <input
                    placeholder="Nome da Categoria de Funcionário"
                    id="name"
                    name="name"
                  ></input>
                  <label htmlFor="desc">Descrição</label>
                  <input
                    placeholder="Descrição da da Categoria de Funcionário"
                    name="desc"
                    id="desc"
                  ></input>{" "}
                  <label htmlFor="sal">Salário</label>
                  <input
                    placeholder="Salário"
                    id="sal"
                    name="sal"
                    type="number"
                  ></input>
                  <label htmlFor="sal">Salário</label>
                  <select>
                    <option>Selecione um tipo de Permisão</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <button>Cadastrar</button>
                </form>
              )}
            </div>
          </>
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
