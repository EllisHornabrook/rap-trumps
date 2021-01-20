import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = () => {
    return (
        <div className={styles.cardBack}>
            <div className={styles.cardBorder}>
                <div>
                    <h2>RAP</h2>
                    <h2>TRUMPS</h2>
                </div>
            </div>
        </div>
    );
};

export default CardBack;
