import BingoBoard from "./components/BingoBoard";
import Button from "./components/Button";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <h1>
        <span>社</span>
        <span>情</span>
        <span>B</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>O</span>
      </h1>
      <BingoBoard />
      <div className={styles.buttonContainer}>
        <Button
          label={"はじめから"}
          onClick={() => {
            window.location.reload();
          }}
        />
        <Button
          label={"まわす"}
          onClick={() => {
            alert("Not implemented!");
          }}
        />
      </div>
    </main>
  );
}
