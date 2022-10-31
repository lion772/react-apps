import React, { FC } from 'react';
import { createContext } from "react";

import styles from './Context.module.css';

interface ContextProps {}

const Context: FC<ContextProps> = () => (
  <div className={styles.Context}>
    Context Component
  </div>
);

export default Context;
