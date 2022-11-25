import React, { FC } from 'react';
import styles from './AuthPage.module.css';

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => (
  <div className={styles.AuthPage}>
    AuthPage Component
  </div>
);

export default AuthPage;
