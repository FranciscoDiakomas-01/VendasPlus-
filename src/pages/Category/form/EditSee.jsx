/* eslint-disable react/prop-types */
import '../index.css'
import { useRef , useState } from 'react';
import defaultLogo from '../../../assets/pngegg (1).png'
export default function SeeAndEitProduct({closeModal}) {

    const [active , setActive] = useState(1)
    const ref= useRef(1)
    return (
    <main id='formProduct'>
        <form>
        <nav>
            <p  onClick={()=>{
                try{
                    ref.current.classList.remove('rihgth')
                    ref.current.classList.remove('rihgth1')
                    setActive(1)
                }catch(e){
                    console.log(e)
                }
                
            }}>Edição</p>
            <p onClick={()=>{
                try{
                    ref.current.classList.add('rihgth') 
                    ref.current.classList.remove('rihgth1')
                    setActive(2)
                }catch(e){
                    console.log(e)
                }
                
            }}> Visualização</p>

            <p onClick={()=>{
                try{
                    ref.current.classList.add('rihgth1')
                    setActive(3)
                }catch(e){
                    console.log(e)
                }
                
            }}> Produtos</p>
            <span ref={ref}></span>
        </nav>
        {
            active == 1 ?  <>
            <div>
                <span>
                    <img src={defaultLogo}/>
                    <input type="file"/>
                </span>
            </div>
            <article>
                <input placeholder="Nome Produto"></input>
                <input placeholder="Descrição"></input>
            </article>
            <span>
                <button type='submit'>Actualizar</button>
                <button type='reset' onClick={()=>{
                    closeModal(false)
                }}>Cancelar</button>
            </span>
            </>
            : active == 2 ?
            <>
            <aside id='seeProduct'>
            <img src={defaultLogo}/>
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
                    <strong>Total Produtos : </strong>
                    <i>Computador HP</i>
                </p>
                <p>
                    <strong>Total Produtos Vendidos : </strong>
                    <i>Computador HP</i>
                </p>
                <p style={{color : 'red'}}>
                    <strong>Total Produtos Stock Negativo : </strong>
                    <i>Computador HP</i>
                </p>
                <p style={{color : 'green'}}>
                    <strong>Total Produtos Stock Positivo : </strong>
                    <i>Computador HP</i>
                </p>
                <p>
                    <strong>Total Vendas : </strong>
                    <i>Computador HP</i>
                </p>
            </aside>
            </aside>
            
            <span>
                <button type='reset' onClick={()=>{
                    closeModal(false)
                }}>Fechar</button>
            </span>
            </>
            :
            <>
            <section id='productList'>
                <span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span>
                <span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span>
                <span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span><span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span><span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span><span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span><span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span><span>
                    <img src={defaultLogo} alt={defaultLogo}/>
                    <div>
                        <p>
                            <strong>Nome</strong>
                            <i>Nome do Produto</i>
                        </p>
                        <p>
                            <strong>Preço</strong>
                            <i>11</i>
                        </p>
                        <p>
                            <strong>Stock</strong>
                            <i>11</i>
                        </p>
                    </div>
                </span>
            </section>
            <span>
                <button type='reset' onClick={()=>{
                    closeModal(false)
                }}>Fechar</button>
            </span>
            </>

        }
            
        </form>
    </main>
    );
}