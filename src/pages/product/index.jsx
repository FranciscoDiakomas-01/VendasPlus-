
import SearchBar from "../../componets/searchBar";
import './index.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import log from '../../assets/pngegg.png'
import { useState } from "react";
import FomrProduct from "./form";
import SeeAndEitProduct from "./form/EditSee";
export default function Product() {

    const [addModal , setAddModal] = useState(false)
    const [see , setSee] = useState(false)
    const [product , setProdut] = useState([
        {
            id : 1,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 2,
            profile : log,
            name : 'Computer Hp',
            stock : 10,
            price : 120000
        },{
            id : 3,
            profile : log,
            name : 'Computer Hp',
            stock : 15,
            price : 120000
        },{
            id : 4,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 5,
            profile : log,
            name : 'Computer Hp',
            stock : 51,
            price : 120000
        },{
            id : 6,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 7,
            profile : log,
            name : 'Computer Hp',
            stock : 15,
            price : 120000
        },{
            id : 8,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 1,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 1,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 1,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 1,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },{
            id : 1,
            profile : log,
            name : 'Computer Hp',
            stock : 5,
            price : 120000
        },
    ])
    return (
      <section id="produt">
        <SearchBar placeholder="Nome do Produto" />
        {addModal && <FomrProduct closeModal={setAddModal} />}
        {see && <SeeAndEitProduct closeModal={setSee} />}

        <article id="scrollPdouct">
          {product.map((p) => (
            <aside key={p.id}>
              <button
                onClick={() => {
                  sessionStorage.setItem("id", p.id);
                  setSee(true);
                }}
              >
                <BsThreeDotsVertical />
              </button>
              <img src={p.profile} alt={p.name} />
              <b>{p.name}</b>
              <div>
                <p>
                  {Number(p.price).toLocaleString("pt", {
                    style: "currency",
                    currency: "AOA",
                  })}
                </p>
                <i
                  style={{
                    backgroundColor: p.stock > 5 ? "" : "red",
                  }}
                ></i>
              </div>
            </aside>
          ))}
        </article>
        <button
          onClick={() => {
            setAddModal(true);
          }}
        >
          +
        </button>
      </section>
    );
}