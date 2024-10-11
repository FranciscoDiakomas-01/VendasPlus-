import "./index.css";
import log from '../../assets/pngegg (2).png'
export default function Login() {
    return (
      <main id="login">
        <form>
          <span>
            <img src={log} />
          </span>
          <label>Email</label>
          <input type="email" placeholder="exemplo@gmail.com" />
          <label>Senha</label>
          <input type="password" placeholder="Sua senha" />
          <button>
            <p>Acessar</p>
          </button>
        </form>
      </main>
    );
}
