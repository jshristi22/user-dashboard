import styles from './custom_button.module.scss'
function CustomButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <div className={styles.buttonDiv}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

export default CustomButton;
