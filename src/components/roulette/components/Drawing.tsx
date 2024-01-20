import { useEffect, useState } from "react";
import styles from "./Drawing.module.css";

interface DrawingProps {
  items: string[];
}

export default function Drawing({ items }: DrawingProps) {
  const [displayingItemIndex, setDisplayingItemIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDisplayingItemIndex(Math.floor(Math.random() * items.length));
    }, 100);
  });

  return (
    <div className={styles.drawingRoot}>
      <h1>{items[displayingItemIndex]}</h1>
    </div>
  );
}
