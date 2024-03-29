/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import CustomButton from "../../../custom_components/custom_button/custom_button";
import { getUserDetails } from "../../../data/data";
import { IUserData } from "../user_details_table/user_details_table";
import styles from "./user_details_card.module.scss";

interface IProps {
  OnIsAllUserClosed: (e: boolean) => void;
  userId: number;
}

function UserDetailsCard({ OnIsAllUserClosed, userId }: IProps) {
  const [userDetails, setUserDetails] = useState<IUserData>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(userId.toString());
    if (data) {
      const parsedData = JSON.parse(data);
      setUserDetails(parsedData);
    } else {
      fetchData();
    }
  }, [userId]);

  const fetchData = async () => {
    try {
      const details = await getUserDetails(userId);
      setUserDetails(details.data);
      localStorage.setItem(userId.toString(), JSON.stringify(details.data));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getFullName = useMemo(() => {
    let fullName = userDetails.firstName;

    if (userDetails?.middleName?.length) {
      fullName += ` ${userDetails?.middleName}`;
    }
    if (userDetails?.lastName?.length) {
      fullName += ` ${userDetails?.lastName}`;
    }
    return fullName;
  }, [userDetails]);

  return (
    <div className={styles.cardContainer}>
      <CustomButton
        label="<- All Users"
        onClick={() => OnIsAllUserClosed(false)}
      />
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className={styles.card}>
          <div className={styles.titles}>
            <h4>User ID</h4>
            <h4>Salutation</h4>
            <h4>Full Name</h4>
          </div>
          <div className={styles.details}>
            <p>{userId}</p>
            <p>{userDetails.salutation}</p>
            <p>{getFullName}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetailsCard;
