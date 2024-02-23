import styles from "./custom_button.module.scss";

function CustomButton({
  onClick,
  label,
  disable = false,
}: {
  onClick: () => void;
  label: string;
  disable?: boolean;
}) {
  return (
    <button
      className={styles.customButton}
      onClick={onClick}
      disabled={disable}
    >
      {label}
    </button>
  );
}

export default CustomButton;
