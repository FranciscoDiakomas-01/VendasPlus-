import defaultLogo from "../../../assets/pngegg (1).png";
export default function FormPerson({ closeModal }) {
return (
    <main id="formProduct">
        <form>
        <h2>Funcionário</h2>
        <div>
            <span>
            <img src={defaultLogo} />
            <input type="file" />
            </span>
        </div>
        <article>
            <input placeholder="Nome"></input>
            <input placeholder="Email" type="email"></input>
            <input placeholder="Tel" type="tel"></input>
            <input placeholder="IBAN" type="text"></input>
            <input placeholder="BI"></input>
            <input placeholder="Morada"></input>
            <select>
            <option>Categoria</option>
            </select>
            <select>
            <option>Gênero</option>
            </select>
        </article>
        <span>
            <button type="submit">Cadastrar</button>
            <button
            type="reset"
            onClick={() => {
                closeModal(false);
            }}
            >
            Cancelar
            </button>
        </span>
        </form>
    </main>
);
}
