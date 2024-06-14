import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={styles.links}>
      <div>
        <Link to="cities">My Cities</Link>
      </div>
      <div>
        <Link to="countries">My Countries</Link>
      </div>
      <div>
        <Link to="form">Form</Link>
      </div>
    </div>
  );
}

export default AppNav;
