import "./index.css";
import { FaCoins , FaDollarSign  , FaUserAlt , FaMoneyCheck , FaDatabase , FaShoppingCart} from "react-icons/fa";
export default function DashBoard() {
  return (
    <main id="dashBoard">
      <article>
        <aside>
          <h2>Bom dia Fulano!</h2>
          <p>fulano@gmail.com</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto
            praesentium delectus ad labore magni, quod quaerat sint odio ea?
            Dolore iste dolorem et commodi nesciunt eaque impedit sapiente
            ducimus?
          </p>
          <button>Ver Retórios</button>
        </aside>

      </article>

      <article>
        <figure>
          <h2>Total Vendas</h2>
          <strong>1</strong>
          <FaMoneyCheck />
        </figure>
        <figure>
          <h2>Total Despesa</h2>
          <strong>1</strong>
          <FaDollarSign />
        </figure>
        <figure>
          <h2>Total Produtos</h2>
          <strong>1</strong>
          <FaDatabase />
        </figure>
        <figure>
          <h2>Total Produtos On</h2>
          <strong>1</strong>
          <FaCoins />
        </figure>
        <figure>
          <h2>Total Produtos Off</h2>
          <strong>1</strong>
          <FaCoins />
        </figure>
        <figure>
          <h2>Total Categoria</h2>
          <strong>1</strong>
          <FaShoppingCart/>
        </figure>
        <figure>
          <h2>Total Funcionários</h2>
          <strong>1</strong>
          <FaUserAlt />
        </figure>
      </article>
    </main>
  );
}
