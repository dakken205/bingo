import { useState } from "react";
import BingoBoard from "./components/BingoBoard";
import Button from "./components/Button";
import Drawing from "./components/Drawing";
import items from "./data/items.json";
import drum from "./assets/se/short.mp3";
import closing from "./assets/se/closing.mp3";
import styles from "./App.module.css";

export default function App() {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState<boolean>(false);
  const [drawn, setDrawn] = useState<Set<number>>(new Set());
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const draw = () => {
    if (drawn.size === items.length) return;
    let remaining = Array.from(items.keys()).filter((i) => !drawn.has(i));
    let index = Math.floor(Math.random() * remaining.length);
    let item = remaining[index];

    if (isAnimationEnabled) {
      setIsDrawing(true);
      new Audio(drum).play();
      setTimeout(() => {
        new Audio(closing).play();
        setIsDrawing(false);
        drawn.add(item);
        setDrawn((prev) => new Set(prev.add(item)));
      }, 5000);
    } else {
      drawn.add(item);
      setDrawn((prev) => new Set(prev.add(item)));
    }
  };

  return (
    <main className={styles.main}>
      {isDrawing && <Drawing />}
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
      <div className={styles.animationButtonContainer}>
        <input
          type="checkbox"
          id="animation"
          checked={isAnimationEnabled}
          onChange={(e) => setIsAnimationEnabled(e.target.checked)}
        />
        <label htmlFor="animation">サウンドとアニメーション</label>
      </div>
    </main>
  );
}
