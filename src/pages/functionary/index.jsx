import "./index.css";
import SearchBar from "../../componets/searchBar";
import log from "../../assets/pngegg (1).png";
import { FaEye, FaTrash } from "react-icons/fa";
import { useState } from "react";
import FormPerson from "./Form";
import SeeAndEditPerson from "./Form/EditSee";
export default function Functionary() {
  const [add, setAdd] = useState(false);
  const [see, setSee] = useState(false);
  const [users, seUser] = useState([
    {
      name: "Francisco Diakomas",
      status: 1,
      email: "diakoma@hotmail.com",
      img: log,
      id: 12,
    },
    {
      name: "Miguel Diakomas",
      status: 2,
      email: "miguel@hotmail.com",
      img: log,
      id: 13,
    },
    {
      name: "JOse Diakomas",
      status: 2,
      email: "diakoma@hotmail.com",
      img: log,
      id: 122,
    },
    {
      name: "Pedro Diakomas",
      status: 2,
      email: "miguel@hotmail.com",
      img: log,
      id: 133,
    },
  ]);
  return (
    <main id="persosn">
      {add && <FormPerson closeModal={setAdd} />}
      {see && <SeeAndEditPerson closeModal={setSee} />}
      <SearchBar placeholder="Nome de um Funcionário" />
      <form id="filtroPerson">
        <label>Filtrar Por Categoria</label>
        <select>
          <option>Categoria</option>
        </select>
      </form>
      <section id="grelhaPerson">
        {users.map((user) => (
          <figure key={user.id} id={user.id}>
            <span onClick={()=>{
              setSee(true)
            }}>
              <FaEye />
            </span>
            <img src={user.img} />
            <figcaption>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
              <p
                style={{
                  color: user.status == 1 ? "green" : "red",
                }}
              >
                Estatus : {user.status == 1 ? "Activo" : "Desativo"}
              </p>
            </figcaption>
            <span>
              <FaTrash />
            </span>
          </figure>
        ))}
      </section>
      <button
        onClick={() => {
          setAdd(true);
        }}
      >
        +
      </button>
    </main>
  );
}
