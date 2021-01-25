import React from "react";
import styles from "./CardCount.module.scss";

const CardCount = (props) => {
    const { firstDeck, secondDeck, playerTurn } = props;
    const hightlightTurn = playerTurn ? styles.player : styles.opponent;

    return (
        <div className={`${styles.cardCount} ${hightlightTurn}`}>
            <h2 className={styles.playerCount}>{firstDeck.length}</h2>
            <h2 className={styles.opponentCount}>{secondDeck.length}</h2>
        </div>
    );
};

export default CardCount;