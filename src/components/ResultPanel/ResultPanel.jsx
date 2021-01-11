import React from "react";
import styles from "./ResultPanel.module.scss";

const ResultPanel = (props) => {
  const checkResult = () => {
    if (props.determinedResult === "Player") {
      return (
        <div className={styles.player}>
          <h2>PLAYER WINS</h2>
        </div>
      )
    } else if (props.determinedResult === "Computer") {
      return (
        <div className={styles.computer}>
          <h2>COMPUTER WINS</h2>
          <h2>DECIDING . . .</h2>
        </div>
      )
    } else if (props.determinedResult === "Draw") {
      return (
        <div className={styles.draw}>
          <h2>IT'S A DRAW</h2>
        </div>
      )
    } else {
      return null
    };
  };

  return (
    <>
      {checkResult()}
    </>
  );
};

export default ResultPanel;
