import { useState } from "react";
import im from "../../images/logo.svg";
export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={im} alt="" srcset="" />
      </div>
      <div className="toggle-menu" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className={`menu ${menu && "active"}`}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <hr />
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
};
