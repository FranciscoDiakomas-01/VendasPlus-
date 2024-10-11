import "./index.css";
import {FaDollarSign  , FaMoneyCheck } from "react-icons/fa";
export default function DashBoardSell() {
  return (
    <main id="dashBoardSel">
      <article>
        <figure>
          <h2>Entrada do Dia</h2>
          <strong>1</strong>
          <FaMoneyCheck />
        </figure>
        <figure>
          <h2>Despesa do Dia </h2>
          <strong>1</strong>
          <FaDollarSign />
        </figure>
        <figure>
          <h2>Produtos vendidos</h2>
          <strong>1</strong>
          <FaMoneyCheck />
        </figure>
        <figure>
          <h2>Montante no Caixa</h2>
          <strong>1</strong>
          <FaDollarSign />
        </figure>
      </article>
    </main>
  );
}
