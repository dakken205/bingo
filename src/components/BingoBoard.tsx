import styles from "./BingoBoard.module.css";
import items from "../data/items.json";

export default function BingoBoard() {
  return (
    <div className={styles.boardRoot}>
      <table className={styles.table}>
        <thead>
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <tr key={i}>
                  {Array(15)
                    .fill(0)
                    .map((_, j) => {
                      return <td key={j}>{items[i * 15 + j]}</td>;
                    })}
                </tr>
              );
            })}
        </thead>
      </table>
    </div>
  );
}
