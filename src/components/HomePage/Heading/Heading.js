import React from "react";
import styles from "./Heading.module.css";
import { HiArrowSmRight, HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <>
      <div className={styles.heading}>
        <Link to="/about" className={styles.link}>
          <p>
            <HiEye className={styles.eye} />
            100% Transparency: Take a peek behind the algorithm
            <HiArrowSmRight className={styles.arrow} />
          </p>
        </Link>
        <div className={styles.line}></div>
        <div className={styles.spacing}></div>
      </div>
    </>
  );
}

export default Heading;
