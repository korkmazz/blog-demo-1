import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
    </div>
  );
}
