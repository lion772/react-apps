import React, { FC } from 'react';
import styles from './UserProfile.module.css';

interface UserProfileProps {}

const UserProfile: FC<UserProfileProps> = () => {
   return (
       <main className={styles.profile}>
           <h2>My User Profile</h2>
       </main>
   );
};

export default UserProfile;
