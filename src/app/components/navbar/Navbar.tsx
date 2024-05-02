import Logo from "../logo/Logo";
import styles from "./Navbar.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Logo tint_color="black" />
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>SHOP</li>
          <li className={styles.menu_item}>HOW IT WORKS</li>
          <li className={styles.menu_item}>FAQ</li>
          <li className={styles.menu_item}>CONTACT</li>
          <li className={styles.shoppingCard}>
            <MdOutlineShoppingCart size={18} />
            <div className={styles.badge}>2</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
