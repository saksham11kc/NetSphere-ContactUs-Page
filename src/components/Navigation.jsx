import Logo from "../../public/logoByDalle-modified.png";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src={Logo} alt="NetSphere Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
