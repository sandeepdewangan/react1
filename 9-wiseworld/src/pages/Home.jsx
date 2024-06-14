import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <main className={styles.homepage}>
      <Navigation />
      <section>
        <h1>Travel World with Us...</h1>
        <h3>
          A world map that tracks your progress of travel. You can add, remove
          and edit your journeys.
        </h3>
        <Link to="/app">Start Tracking Now!</Link>
      </section>
    </main>
  );
}

export default Home;
