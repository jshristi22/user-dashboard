import { useEffect, useState } from "react";
import CustomButton from "../custom_button/custom_button";
import styles from "./custom_user_details_table.module.scss";
import { getAllUsers } from "../../data_fetching_apis/data";
import UserDetailsCard from "../user_details_card/user_details_card";

const tableHeaderLabel = ["ID", "First Name", "Middle Name", "Last Name"];

export interface IUserData {
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  salutation?: string | null;
  userId?: number;
}

function CustomUserDetailsTable() {
  const [isAllUserClosed, setIsAllUserClosed] = useState(false);
  const [allUserData, setAllUserData] = useState<IUserData[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number|null>()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {    
    const users = await getAllUsers();    
    setAllUserData([...users.data]);
  };

  const onRowClick = (ele:IUserData) => {
    setSelectedUserId(ele.userId)
  };
  if (isAllUserClosed && selectedUserId !== null) {
    return (
      <div className={styles.userCard}>
        <UserDetailsCard userId={selectedUserId!} OnIsAllUserClosed={setIsAllUserClosed} />
      </div>
    );
  }

  return (
    <>
      <div className={styles.detailstable}>
        <div className={styles.title}>
          <h5>All Users</h5>
        </div>
        <table>
          <thead>
            <tr>
              {tableHeaderLabel.map((label: string) => (
                <th className={styles.addBorder}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allUserData.map((ele) => {
              return (
                <tr className={`${selectedUserId === ele.userId ? styles.selectedRow:''}`} key={ele.userId} onClick={() => onRowClick(ele)}>
                  <td align="center">{ele.userId}</td>
                  <td align="center">{ele.firstName ?? '-'}</td>
                  <td align="center">{ele.middleName ?? '-'}</td>
                  <td align="center">{ele.lastName ?? '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CustomButton
        onClick={() => setIsAllUserClosed(true)}
        label={"Show Details"}
      />
    </>
  );
}

export default CustomUserDetailsTable;
