import '../../finance/index.css'
import SearchBar from "../../../componets/searchBar";
import log from "../../../assets/pngegg.png";
import {  FaShoppingCart } from "react-icons/fa";
export default function SellProduct() {
 return (
    <main id="modal">
      <SearchBar placeholder="Código de Barra do Produto"/>
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
    </main>
  );
}