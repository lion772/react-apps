import React, { FC, useEffect, useState } from "react";
import useCounter from "../../hooks/user-counter/user-counter";
import Card from "../Card/Card";
import styles from "./ForwardCounter.module.css";

interface ForwardCounterProps {}

const ForwardCounter: FC<ForwardCounterProps> = () => {
    const counter = useCounter(true);
    return <Card>{counter}</Card>;
};

export default ForwardCounter;
