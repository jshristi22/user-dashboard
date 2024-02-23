import { useEffect, useState } from "react";
import CustomMenu from "../../custom_components/custom_menu/custom_menu";
import { getMenuData } from "../../data/data";
import styles from "./sidebar.module.scss";

interface IMenuItem {
  [label: string]: {
    menuItems?: string[];
  };
}
function Sidebar() {
  const [menuData, setMenuData] = useState<IMenuItem>({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await getMenuData();
    const menuList: IMenuItem = {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response?.data?.forEach((ele:any) => {
      if (menuList[ele?.menuGroupName]) {
        menuList[ele?.menuGroupName].menuItems?.push(ele?.menuItemName);
      } else {
        menuList[ele?.menuGroupName] = {
          menuItems: [ele?.menuItemName],
        };
      }
    });
    setMenuData(menuList);
  };

  return (
    <div className={styles.sidebarContainer}>
      <h1>Assignment</h1>
      <hr />
      <div className={styles.menuContainer}>
        {Object.keys(menuData).map((key) => {
          const menu = {
            label: key,
            menuItems: [...(menuData[key].menuItems ?? [])],
          };
          return <CustomMenu key={key} menuData={menu} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
