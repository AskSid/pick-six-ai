import React from "react";
import styles from "./Heading.module.css";
import { HiArrowSmRight, HiEye } from "react-icons/hi";

function Heading() {
  return (
    <>
      <div className={styles.heading}>
        <p>
          <HiEye className={styles.eye} />
          100% Tranceparency: Take a peek behind the algorithm
          <HiArrowSmRight className={styles.arrow} />
        </p>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

export default Heading;
