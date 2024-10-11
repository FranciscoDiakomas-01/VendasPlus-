/* eslint-disable react/prop-types */
import '../index.css'
import { useRef , useState } from 'react';
import defaultLogo from '../../../assets/pngegg (1).png'
export default function SeeAndEitProduct({closeModal}) {

    const [active , setActive] = useState(1)
    const ref= useRef(1)
    return (
      <main id="formProduct">
        <form>
          <nav>
            <p
              onClick={() => {
                try {
                  ref.current.classList.remove("rihgth");
                  setActive(1);
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              Edição
            </p>
            <p
              onClick={() => {
                try {
                  ref.current.classList.add("rihgth");
                  setActive(2);
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              {" "}
              Visualização
            </p>
            <span ref={ref}></span>
          </nav>
          {active == 1 ? (
            <>
              <div>
                <span>
                  <img src={defaultLogo} />
                  <input type="file" />
                </span>
              </div>
              <article>
                <input placeholder="Nome Produto"></input>
                <input placeholder="Descrição"></input>
                <input placeholder="Quantidade"></input>
                <input placeholder="Preço"></input>
                <select>
                  <option>Categoria</option>
                </select>
              </article>
              <span>
                <button type="submit">Actualizar</button>
                <button
                  type="reset"
                  onClick={() => {
                    closeModal(false);
                  }}
                >
                  Cancelar
                </button>
              </span>
            </>
          ) : (
            <>
              <aside id="seeProduct">
                <img src={defaultLogo} />
                <aside>
                  <p>
                    <strong>Nome : </strong>
                    <i>Computador HP</i>
                  </p>
                  <p>
                    <strong>Descrição : </strong>
                    <i>Computador HP</i>
                  </p>
                  <p>
                    <strong>Preço : </strong>
                    <i>Computador HP</i>
                  </p>
                  <p>
                    <strong>Quantidade : </strong>
                    <i>Computador HP</i>
                  </p>
                  <p>
                    <strong>Categoria : </strong>
                    <i>Computador HP</i>
                  </p>
                </aside>
              </aside>

              <span>
                <button
                  type="reset"
                  onClick={() => {
                    closeModal(false);
                  }}
                >
                  Deletar
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    closeModal(false);
                  }}
                >
                  Fechar
                </button>
              </span>
            </>
          )}
        </form>
      </main>
    );
}