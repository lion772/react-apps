import React, { FC, useEffect, useState } from "react";
import useCounter from "../../hooks/user-counter/user-counter";
import Card from "../Card/Card";
import styles from "./BackwardCounter.module.css";

interface BackwardCounterProps {}

const BackwardCounter: FC<BackwardCounterProps> = () => {
    const counter = -useCounter();

    return <Card>{counter}</Card>;
};

export default BackwardCounter;
