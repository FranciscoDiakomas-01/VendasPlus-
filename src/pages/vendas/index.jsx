import '../../App.css'
import { BiLogOut } from "react-icons/bi";
import { BsUiChecksGrid } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { Outlet, Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../assets/pngegg (2).png";
import { useState } from "react";
export default function Vendas() {
  const [activeLink, setActiveLink] = useState(1);
    const links = [
      {
        name: "Painel",
        icon: <BsUiChecksGrid />,
        path: "/sells",
        id: 1,
      },
      {
        name: "Vender",
        icon: <LuShoppingCart />,
        path: "/sells/product",
        id: 3,
      },
      {
        name: "Relátorio",
        icon: <LuShoppingCart />,
        path: "/sells/finance",
        id: 2,
      },
      {
        name: "Minha Conta",
        icon: <IoSettingsOutline />,
        path: "/sells/config",
        id: 9,
      },
    ];
 return (
   <main id="app">
     <nav>
       <div>
         <img src={logo} />
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