import { BsUiChecksGrid, BsBarChart } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { Outlet, Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import "./App.css";
import logo from './assets/pngegg (2).png'
import { useState } from "react";
function App() {
  const links = [
    {
      name: "DashBoard",
      icon: <BsUiChecksGrid />,
      path: "/",
      id: 1,
    },
    {
      name: "Produtos",
      icon: <LuShoppingCart />,
      path: "/product",
      id: 2,
    },
    {
      name: "Funcionários",
      icon: <FaUserGroup />,
      path: "/function",
      id: 5,
    },
    {
      name: "Categoria",
      icon: <LuShoppingCart />,
      path: "/category",
      id: 99,
    },
    {
      name: "Finanças",
      icon: <BsBarChart />,
      path: "/finance",
      id: 8,
    },
    {
      name: "Configuração",
      icon: <IoSettingsOutline />,
      path: "/config",
      id: 9,
    },
  ];
  const [activeLink, setActiveLink] = useState(1);
  return (
    
    <main id="app">
      <nav>
        <div>
          <img src={logo}/>
        </div>
        <ol>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => {
                setActiveLink(link.id);
              }}
              style={{
                backgroundColor: activeLink == link.id ? "#242424" : "#ffff",
                border: "1px solid #ffff",
                color: activeLink == link.id ? "#ffff" : "#646cff",
              }}
            >
              <p>{link.name}</p>
              <p>{link.icon}</p>
            </Link>
          ))}
        </ol>
        <div>
          <button>
            <BiLogOut />
            <p>Sair</p>
          </button>
        </div>
      </nav>

      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default App;
