import styles from "./Selected.module.css";

interface SelectedProps {
  item: string;
  close: () => void;
}

export default function Selected({ item, close }: SelectedProps) {
  return (
    <div className={styles.selectedRoot} onClick={close}>
      <h1 className={styles.text}>{item}</h1>
    </div>
  );
}
