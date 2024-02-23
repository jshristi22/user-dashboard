import styles from './custom_menu.module.scss'

interface IProps {
    menuData: {
        label: string,
        menuItems: string[],
    }
}

function CustomMenu({menuData}:IProps) {
  return (
    <div className={styles.menuContainer}>
        <h3>{menuData.label}</h3>
        <div className={styles.items}></div>
      {menuData.menuItems.map((item: string)=>{
        return <strong>{item}</strong>
      })}
    </div>
  )
}

export default CustomMenu
