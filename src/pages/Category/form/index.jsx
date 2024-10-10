import '../index.css'
import defaultLogo from '../../../assets/pngegg (1).png'
export default function FomrProduct({closeModal}) {
    return (
    <main id='formProduct'>
        <form>
            <h2>Categoria</h2>
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
                <button type='submit'>Cadastrar</button>
                <button type='reset' onClick={()=>{
                    closeModal(false)
                }}>Cancelar</button>
            </span>
        </form>
    </main>
    );
}