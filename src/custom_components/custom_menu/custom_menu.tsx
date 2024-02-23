import styles from "./custom_menu.module.scss";

interface IProps {
  menuData: {
    label: string;
    menuItems: string[];
  };
}

function CustomMenu({ menuData }: IProps) {
  return (
    <div className={styles.menuContainer}>
      <h3>Menu {menuData.label}</h3>
      <div className={styles.items}>
        {menuData.menuItems.map((item: string) => {
          return <strong key={item}>{item}</strong>;
        })}
      </div>
    </div>
  );
}

export default CustomMenu;
