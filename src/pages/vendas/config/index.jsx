import "./index.css";
import { FaCamera } from "react-icons/fa6";
import { useState } from "react";
import l from "../../../assets/pngegg (1).png";
export default function ConfigSell() {;
  const [update, setUpdate] = useState(1);
  return (
    <main id="config">
      <section>
        {update == 1 ? (
          <aside>
            <img src={l} />
            <article>
              <span>Nome : Admin</span>
              <span>Email : Email</span>
              <span>Salário : 333</span>
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
              <input placeholder="Email" />
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
      </section>
    </main>
  );
}
