import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul className="">
        <li className="">
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className="">
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className="">
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
