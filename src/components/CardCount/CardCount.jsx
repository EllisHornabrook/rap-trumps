import React from "react";
import styles from "./CardCount.module.scss";

const CardCount = (props) => {
    const { firstDeck, secondDeck } = props;

    return (
        <div className={styles.cardCount}>
            <h2>{firstDeck.length}</h2>
            <h2>{secondDeck.length}</h2>
        </div>
    );
};

export default CardCount;