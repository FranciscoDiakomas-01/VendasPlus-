import "./index.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import log from "../../assets/pngegg (1).png";
import img from "../../assets/pngegg.png";
export default function SeeSells({ close , type }) {
  const [active, setActive] = useState(1);
  const ref = useRef();
  const products = [
    {
      name: "Computer Hp",
      description: "Core I5 10th",
      price: 150000,
      quantity: 2,
      id: 20,
      img: img,
    },
    {
      name: "Computer Hp",
      description: "Core I5 10th",
      price: 150000,
      quantity: 2,
      id: 20,
      img: img,
    },
    {
      name: "Computer Hp",
      description: "Core I5 10th",
      price: 150000,
      quantity: 2,
      id: 20,
      img: img,
    },
    {
      name: "Computer Hp",
      description: "Core I5 10th",
      price: 150000,
      quantity: 2,
      id: 20,
      img: img,
    },
    {
      name: "Computer Hp",
      description: "Core I5 10th",
      price: 150000,
      quantity: 2,
      id: 20,
      img: img,
    },
  ];
  function up() {
    try {
      ref.current.classList.add("up");
    } catch (error) {
      console.log(error);
    }
  }
  function down() {
    try {
      ref.current.classList.remove("up");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {type == 1 ? (
        <main id="seeSells">
          <div>
            <button
              style={{
                backgroundColor: active == 1 ? "#06ae55" : "",
                border: active == 1 ? "solid 1px #06ae55" : "solid 1px #ffff",
              }}
              onClick={() => {
                setActive(1);
                down();
              }}
            >
              Venda
            </button>
            <button
              style={{
                backgroundColor: active == 2 ? "#06ae55" : "",
                border: active == 2 ? "solid 1px #06ae55" : "solid 1px #ffff",
              }}
              onClick={() => {
                setActive(2);
                up();
              }}
            >
              Vendedor
            </button>
            <button
              onClick={() => {
                close(false);
              }}
            >
              Fechar
            </button>
          </div>
          <article ref={ref}>
            {active == 1 ? (
              <>
                <span>
                  <strong>Nome Cliente</strong>
                  <strong>Telefone Cliente</strong>
                  <strong>Total Produto</strong>

                  <p>Pedro Miguel De Sousa</p>
                  <p>924 272 371</p>
                  <p>22</p>

                  <strong>Total Pago</strong>
                  <strong>Troco Recebido</strong>
                  <strong>Forma de Pagamento</strong>

                  <p>
                    {Number(20).toLocaleString("pt", {
                      style: "currency",
                      currency: "AOA",
                    })}
                  </p>
                  <p>
                    {Number(20).toLocaleString("pt", {
                      style: "currency",
                      currency: "AOA",
                    })}
                  </p>
                  <p>Pay</p>
                </span>
                <Swiper
                  slidesPerView={4}
                  pagination={{ clickable: true }}
                  navigation
                  spaceBetween={22}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div id="productSlide">
                        <img alt={product.name} src={product.img} />
                        <strong>{product.name}</strong>
                        <p>
                          {Number(product.price).toLocaleString("pt", {
                            style: "currency",
                            currency: "AOA",
                          })}
                        </p>
                        <p>{product.quantity}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <aside>
                <img src={log} />
                <section>
                  <span>
                    <strong>Nome</strong>
                    <p>José Miguel Canana</p>
                  </span>
                  <span>
                    <strong>Email</strong>
                    <p>JoséMiguelCanana@gmail.com</p>
                  </span>
                  <span>
                    <strong>Gênero</strong>
                    <p>Masculino</p>
                  </span>
                  <span>
                    <strong>Categoria</strong>
                    <p>Vendedor</p>
                  </span>
                </section>
              </aside>
            )}
          </article>
        </main>
      ) : (
        <main id="seeSells">
          <form>
            <h2>Cadastro de Despesa</h2>
            <input type="number" placeholder="Valor da Despesa"></input>
            <select>
              <option>Selecione uma categoria</option>
            </select>
            <button  type="submit">Cadastrar</button>
            <button type="reset" onClick={()=>{
              close(false)
            }}>Cancelar</button>
          </form>
        </main>
      )}
    </>
  );
}
