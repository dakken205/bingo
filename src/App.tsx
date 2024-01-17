import BingoBoard from "./components/BingoBoard";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <h1>
        <span>D</span>
        <span>A</span>
        <span>研</span>
        <span>B</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>O</span>
      </h1>
      <BingoBoard />
    </main>
  );
}
