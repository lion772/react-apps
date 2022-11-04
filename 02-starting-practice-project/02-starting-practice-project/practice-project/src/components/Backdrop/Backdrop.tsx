import React, { FC } from 'react';
import styles from './Backdrop.module.css';

interface BackdropProps {}

const Backdrop: FC<BackdropProps> = () => (
  <div className={styles.Backdrop}>
    Backdrop Component
  </div>
);

export default Backdrop;
