import AppMap from "../components/AppMap";
import AppSidebar from "../components/AppSidebar";
import Navigation from "../components/Navigation";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <>
      <Navigation />
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <AppSidebar />
        </div>
        <div className={styles.map}>
          <AppMap />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
