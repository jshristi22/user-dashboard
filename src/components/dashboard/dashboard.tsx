import { useEffect, useState } from "react";
import CustomUserDetailsTable from "../../custom_components/custom_user_details_table/custom_user_details_table";
import styles from "./dashboard.module.scss";
import { getDashboardNumber } from "../../data_fetching_apis/data";

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
      <h1>{dashboardNumber ?? 0}</h1>
      <div className={styles.userDetailContainer}>
        <CustomUserDetailsTable />
      </div>
    </div>
  );
}

export default Dashboard;
