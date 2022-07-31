import React, {useState} from "react";
import styles from "./AvailablePlayerFilter.module.css";
import { Link } from "react-router-dom";

function AvailablePlayerFilter({setPosition}) {

  const [currentPos, setCurrentPos] = useState(["QB", "RB", "WR", "TE"]);

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  const currStyle = (position) => {
    if (arraysEqual(position, currentPos)) {
      return styles.positionActive;
    }
    return styles.position;
  };

  const setActive = (input) => {
    setPosition(input);
    setCurrentPos(input);
  };

  return (
    <div>
        <div className={styles.main}>
            <Link to="" onClick={() => setActive(["QB", "RB", "WR", "TE"])} className={currStyle(["QB", "RB", "WR", "TE"])}>Overall</Link>
            <Link to="" onClick={() => setActive(["QB"])} className={currStyle(["QB"])}>QB</Link>
            <Link to="" onClick={() => setActive(["RB"])} className={currStyle(["RB"])}>RB</Link>
            <Link to="" onClick={() => setActive(["WR"])} className={currStyle(["WR"])}>WR</Link>
            <Link to="" onClick={() => setActive(["TE"])} className={currStyle(["TE"])}>TE</Link>
            <Link to="" onClick={() => setActive(["RB", "WR", "TE"])} className={currStyle(["RB", "WR", "TE"])}>Flex</Link>
            <Link to="" onClick={() => setActive(["K"])} className={currStyle(["K"])}>K</Link>
            <Link to="" onClick={() => setActive(["DEF"])} className={currStyle(["DEF"])}>DEF</Link>
        </div>
    </div>
  );
}

export default AvailablePlayerFilter;
