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
    <div className={styles.buttonDiv}>
      <button onClick={onClick} disabled={disable}>{label}</button>
    </div>
  );
}

export default CustomButton;
