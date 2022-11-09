import React, { FC, PropsWithChildren } from "react";
import styles from "./Section.module.css";

interface SectionProps {}

const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
    return <section className={styles.section}>{props.children}</section>;
};

export default Section;
