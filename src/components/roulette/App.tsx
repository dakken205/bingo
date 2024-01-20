import { useState } from "react";
import BingoBoard from "./components/BingoBoard";
import Button from "./components/Button";
import Selected from "./components/Selected";
import Drawing from "./components/Drawing";
import items from "../../data/items.json";
import drum from "../../assets/se/short.mp3";
import closing from "../../assets/se/closing.mp3";
import styles from "./App.module.css";

export default function App() {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState<boolean>(false);
  const [latestSelected, setLatestSelected] = useState<number>(-1);

  const [drawn, setDrawn] = useState<Set<number>>(
    localStorage.getItem("drawn")
      ? new Set(JSON.parse(localStorage.getItem("drawn")!))
      : new Set()
  );
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const [afterAnimation, setAfterAnimation] = useState<boolean>(false);

  const draw = () => {
    if (drawn.size === items.length) return;
    let remaining = Array.from(items.keys()).filter((i) => !drawn.has(i));
    let index = Math.floor(Math.random() * remaining.length);
    let item = remaining[index];
    setLatestSelected(item);

    if (isAnimationEnabled) {
      setIsDrawing(true);
      new Audio(drum).play();
      setTimeout(() => {
        new Audio(closing).play();
        setIsDrawing(false);
        setAfterAnimation(true);
        drawn.add(item);
        setDrawn((prev) => new Set(prev.add(item)));
        localStorage.setItem("drawn", JSON.stringify(Array.from(drawn)));
      }, 5000);
    } else {
      drawn.add(item);
      setDrawn((prev) => new Set(prev.add(item)));
      localStorage.setItem("drawn", JSON.stringify(Array.from(drawn)));
    }
  };

  return (
    <main className={styles.main}>
      {isDrawing && <Drawing items={items} />}
      {afterAnimation && (
        <Selected
          item={items[latestSelected]}
          close={() => {
            setAfterAnimation(false);
          }}
        />
      )}
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
            setDrawn(new Set());
            localStorage.removeItem("drawn");
          }}
        />
        <Button label={"まわす"} onClick={draw} />
      </div>
      <div className={styles.animationButtonContainer}>
        <input
          type="checkbox"
          id="animation"
          checked={isAnimationEnabled}
          onChange={(e) => {
            setIsAnimationEnabled(e.target.checked);
          }}
        />
        <label htmlFor="animation">サウンドとアニメーション</label>
      </div>
    </main>
  );
}
