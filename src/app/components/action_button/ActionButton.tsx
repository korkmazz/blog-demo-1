import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  type: "inspire" | "more";
  action?: () => void;
};

export default function ActionButton({ type, action }: ActionButtonProps) {
  return (
    <button
      className={type === "inspire" ? styles.inspire : styles.more}
      onClick={action}
    >
      {type.toUpperCase()}
    </button>
  );
}
