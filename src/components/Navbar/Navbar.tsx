import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <img src="/logo.png" alt="Logo" />
    </div>
    <ul className={styles.links}>
      <li>
        <Link to="/" className={styles.link}>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/about" className={styles.link}>
          Acerca
        </Link>
      </li>
      <li>
        <Link to="/contact" className={styles.link}>
          Contacto
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
