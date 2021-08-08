import im from "../../images/logo.svg";
export const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={im} alt="" srcset="" />
      </div>
      <div className="toggle-menu"><i className="fas fa-bars"></i></div>

      <ul className="menu">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
};
