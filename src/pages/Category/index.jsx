
import SearchBar from "../../componets/searchBar";
import './index.css'
import {FaTrashAlt , FaEye} from 'react-icons/fa'
import log from '../../assets/pngegg.png'
import { useState } from "react";
import FomrProduct from "./form";
import SeeAndEitProduct from "./form/EditSee";
export default function Category() {

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
    <section id="category">
        <SearchBar placeholder="Nome da Categoria"/>
        {
            addModal && <FomrProduct closeModal={setAddModal} />
        }{
            see && <SeeAndEitProduct closeModal={setSee} />
        }
        
        <article id="scrollCategory">
            {
                product.map((p)=>(
                    <aside key={p.id}>
                        <img src={p.profile} alt={p.name}/>
                            <b>{p.name}</b>
                            <div>
                                <button onClick={()=>{
                                        setSee(true)
                                    }}>
                                    <FaEye />
                                </button>
                                <button>
                                    <FaTrashAlt/>
                                </button>
                            </div>
                    </aside>
                ))
            }
        </article>
        <button onClick={()=>{
            setAddModal(true)
        }}>+</button>
    </section>
    );
}