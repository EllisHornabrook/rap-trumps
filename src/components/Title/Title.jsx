import React from "react";
import styles from "./Title.module.scss";

const Title = () => {
    return (
        <div className={styles.titleBackground}>
            <div className={styles.titleContainer}>
                <div className={styles.titleEffect}>
                    <h1>RAP</h1>
                    <h1>TRUMPS</h1>
                </div>
            </div>
        </div>
    );
};

export default Title;