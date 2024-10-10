import { useRef, useState } from "react";
import defaultLogo from "../../../assets/pngegg (1).png";
export default function SeeAndEditPerson({ closeModal }) {
  const [active, setActive] = useState(1);
  const ref = useRef(1);
  return (
    <main id="formProduct">
      <form>
        <nav>
          <p
            onClick={() => {
              try {
                ref.current.classList.remove("rihgth");
                ref.current.classList.remove("rihgth1");
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
                ref.current.classList.remove("rihgth1");
                setActive(2);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {" "}
            Visualização
          </p>
          <p></p>
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
              <input placeholder="Nome"></input>
              <input placeholder="Email" type="email"></input>
              <input placeholder="Tel" type="tel"></input>
              <input placeholder="IBAN" type="text"></input>{" "}
              <select>
                <option>Estatus</option>
              </select>
              <input placeholder="Morada"></input>
              <select>
                <option>Categoria</option>
              </select>
              <select>
                <option>Gênero</option>
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
                  <strong>Email : </strong>
                  <i>email</i>
                </p>
                <p>
                  <strong>Telefone : </strong>
                  <i>Computador HP</i>
                </p>
                <p>
                  <strong>Salário : </strong>
                  <i>Computador HP</i>
                </p>
                <p>
                  <strong>BI : </strong>
                  <i>Computador HP</i>
                </p>
                <p>
                  <strong>IBAN : </strong>
                  <i>Computador HP</i>
                </p>
                <p>
                  <strong>Gênero : </strong>
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
                Fechar
              </button>
            </span>
          </>
        )}
      </form>
    </main>
  );
}
