import { useEffect, useState } from "react";
import UserDetailsTable from "./user_details_table/user_details_table";
import styles from "./dashboard.module.scss";
import { getDashboardNumber } from "../../data/data";

function Dashboard() {
  const [dashboardNumber, setDashboardNumber] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const number = await getDashboardNumber();
    setDashboardNumber(number.data.dashboardNumber);
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1>{dashboardNumber}</h1>
      <div className={styles.userDetailContainer}>
        <UserDetailsTable />
      </div>
    </div>
  );
}

export default Dashboard;
