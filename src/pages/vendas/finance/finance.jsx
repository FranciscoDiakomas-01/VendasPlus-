
import './index.css'
import { useState } from 'react';
import { FaMoneyBill , FaDollarSign} from 'react-icons/fa';
import IndexFinance from '.';
export default function FinanceSell() {

    const [type , setType] = useState(1)
    const [show , setShow] = useState(false)
    const data = [
     
      {
        name: "Total Despesas",
        value: 12,
        id: 2,
        icon: <FaDollarSign />,
      },
      {
        name: "Total Entradas",
        value: 12,
        id: 3,
        icon: <FaMoneyBill />,
      }
    ];
    return (
    <main id='financeSell'>

        {
            show && <IndexFinance types={type}  close={setShow}/>
        }

        {
            data.map((d)=>(
                <figure key={d.id}>
                    <span>
                        <h2>{d.name}</h2>
                        <p>
                            {
                                d.value && Number(d.value).toLocaleString('pt',{
                                    style : 'currency',
                                    currency : 'AOA'
                                })
                            }
                        </p>
                        <button onClick={()=>{
                            setType(d.id)
                            setShow(true)
                        }}>Ver mais Detalhes</button>
                    </span>
                    {d.icon}
                </figure>
            ))
        }
    </main>
);
}