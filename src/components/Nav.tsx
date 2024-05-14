import { FunctionComponent } from "react";
import styles from "./Nav.module.css";

const Nav: FunctionComponent = () => {
  return (
    <header className={styles.nav}>
      <h1 className={styles.dig4crypto}>Dig4Crypto</h1>
      <nav className={styles.navInner}>
        <nav className={styles.shopServicesParent}>
          <div className={styles.shopServices}>Shop Services</div>
          <div className={styles.readBlogs}>Read Blogs</div>
          <div className={styles.contact}>Contact</div>
        </nav>
      </nav>
    </header>
  );
};

export default Nav;
