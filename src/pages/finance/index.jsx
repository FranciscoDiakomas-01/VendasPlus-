/* eslint-disable react/prop-types */
import SearchBar from "../../componets/searchBar";
import "./index.css";
import log from "../../assets/pngegg.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import SeeSells from "./see";
import { useState } from "react";
export default function IndexFinance({ types, close }) {
  const despesa = [
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
    {
      userName: "Pedro Miguel",
      value: 2000,
      description: "Comida",
      date: "20-10-2024",
      id: 1,
      email: "pedro@gmail.com",
    },
    {
      userName: "Jose",
      value: 2000,
      description: "Wifi",
      date: "20-10-2024",
      id: 2,
      email: "jose@gmail.com",
    },
  ];
  const [sell , setSell] = useState(false)
  return (
    <main id="modal">
      {
        sell && <SeeSells close={setSell}/>
      }
      {types == 1 ? (
        <>
          <SearchBar placeholder="Código de Barra" />
          <article>
            <aside>
              <div id="cardProduct">
                <img src={log} />
                <span>
                  <p>
                    <strong>Nome</strong>
                    <p>Nome</p>
                  </p>
                  <p>
                    <strong>Preço</strong>
                    <p>
                      {Number(22).toLocaleString("pt", {
                        style: "currency",
                        currency: "AOA",
                      })}
                    </p>
                  </p>
                  <p>
                    <strong>Quantidade</strong>
                    <p>2</p>
                  </p>
                  <p>
                    <strong>Açcão</strong>
                    <div>
                      <button>+</button>
                      <button>-</button>
                    </div>
                  </p>
                </span>
              </div>
            </aside>
            <aside>
              <header>
                <FaShoppingCart />
                Caixa
              </header>
              <form>
                <input placeholder="Nome do Clente" />
                <input
                  placeholder="Telefone / Email do cliente"
                  type="tel || email"
                />
                <input placeholder="Valor a Pagar" type="number" />
                <select>
                  <option>Forma de Pagamento</option>
                </select>
              </form>
              <span>
                <strong>Total Produtos</strong>
                <p>22</p>
              </span>
              <span>
                <strong>Valor Total</strong>
                <p>
                  {Number(22).toLocaleString("pt", {
                    style: "currency",
                    currency: "AOA",
                  })}
                </p>
              </span>
              <span>
                <strong>Troco</strong>
                <p>
                  {Number(22).toLocaleString("pt", {
                    style: "currency",
                    currency: "AOA",
                  })}
                </p>
              </span>
              <div>
                <button>Finalizar</button>
                <button>Cancelar</button>
              </div>
            </aside>
          </article>
        </>
      ) : types == 2 ? (
        <>
          <form id="dataF">
            <div>
              <label>Filtrar Por data</label>
              <input type="date" />
              <label>Filtrar Por Categoria</label>
              <select>
                <option>Selecione uma Categoria</option>
              </select>
              <button>
                <FaSearch />
              </button>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <td>Usuário</td>
                <td>Email</td>
                <td>Descrição</td>
                <td>Valor</td>
                <td>Data</td>
              </tr>
            </thead>

            <tbody>
              {despesa &&
                despesa.map((d) => (
                  <tr key={d.id}>
                    <td>{d.userName}</td>
                    <td>{d.email}</td>
                    <td>{d.description}</td>
                    <td>
                      {Number(d.value).toLocaleString("pt", {
                        style: "currency",
                        currency: "AOA",
                      })}
                    </td>
                    <td>{d.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <footer>
            <button>{"<"}</button>
            <span>0</span>
            <button>{">"}</button>
            <span> x de y</span>
          </footer>
          <div>
            <h2>
              Total :{" "}
              {Number(0).toLocaleString("pt", {
                style: "currency",
                currency: "AOA",
              })}
            </h2>
          </div>
        </>
      ) : types == 3 ? (
        <>
          <form id="dataF">
            <div>
              <label>Filtrar Por data</label>
              <input type="date" />
              <label>Filtrar Por Vendedor</label>
              <select>
                <option>Selecione um Vendedor</option>
              </select>
              <button>
                <FaSearch />
              </button>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <td>Vendedor</td>
                <td>Cliente</td>
                <td>Produtos</td>
                <td>Valor</td>
                <td>Data</td>
                <td>Detalhes</td>
              </tr>
            </thead>

            <tbody>
              {despesa &&
                despesa.map((d) => (
                  <tr key={d.id}>
                    <td>{d.userName}</td>
                    <td>{d.email}</td>
                    <td>{d.description}</td>
                    <td>
                      {Number(d.value).toLocaleString("pt", {
                        style: "currency",
                        currency: "AOA",
                      })}
                    </td>
                    <td>{d.date}</td>
                    <td id="min">
                      <button onClick={()=>{
                        setSell(true)
                      }}>Ver</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <footer>
            <button>{"<"}</button>
            <span>0</span>
            <button>{">"}</button>
            <span> x de y</span>
          </footer>
          <div>
            <h2>
              Total :{" "}
              {Number(0).toLocaleString("pt", {
                style: "currency",
                currency: "AOA",
              })}
            </h2>
          </div>
        </>
      ) : (
        <></>
      )}

      <button
        onClick={() => {
          close(false);
        }}
      >
        {"<"}
      </button>
    </main>
  );
}
