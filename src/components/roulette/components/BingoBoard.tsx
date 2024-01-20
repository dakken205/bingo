import styles from "./BingoBoard.module.css";

interface BingoBoardProps {
  items: string[];
  drawn: Set<number>;
}

export default function BingoBoard({ items, drawn }: BingoBoardProps) {
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
                      return (
                        <td key={j}>
                          {drawn.has(i * 15 + j) && items[i * 15 + j]}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </thead>
      </table>
    </div>
  );
}
