import React from "react";
import styles from "./RankingsHeader.module.css";
import { Container, Row, Col } from "react-bootstrap";

function RankingsHeader(props) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Player Rankings for 2022/23 Season</h1>
    </div>
  );
}

export default RankingsHeader;
