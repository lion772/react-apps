import React, { FC } from "react";
import styles from "./NewUser.module.css";
import UserForm from "./UserForm/UserForm";

interface NewUserProps {
  getUser: Function;
}

const NewUser: FC<NewUserProps> = ({getUser}) => {

    return (
        <div className={styles.NewUser}>
            <UserForm getUserEntered={getUser} />
        </div>
    );
};

export default NewUser;
