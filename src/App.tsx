import { useState } from "react";
import BingoBoard from "./components/BingoBoard";
import Button from "./components/Button";
import items from "./data/items.json";
import styles from "./App.module.css";

export default function App() {
  const [drawn, setDrawn] = useState<Set<number>>(new Set());

  const draw = () => {
    if (drawn.size === items.length) return;
    let remaining = Array.from(items.keys()).filter((i) => !drawn.has(i));
    let index = Math.floor(Math.random() * remaining.length);
    let item = remaining[index];
    drawn.add(item);
    setDrawn((prev) => new Set(prev.add(item)));
  };

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
      <BingoBoard items={items} drawn={drawn} />
      <div className={styles.buttonContainer}>
        <Button
          label={"はじめから"}
          onClick={() => {
            window.location.reload();
          }}
        />
        <Button label={"まわす"} onClick={draw} />
      </div>
    </main>
  );
}
