import "./Header.scss";
import Logo from "../../assets/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header section">
      <div className="header__logo">
        <img src={Logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__buttons-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "header__buttons header__button-active" : "header__buttons"} >
          <p className="header__button-font">Warehouses</p>
        </NavLink>
        <NavLink to="/inventory" className={({ isActive }) => isActive ? "header__buttons header__button-active" : "header__buttons"}>
          <p className="header__button-font">Inventory</p>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;