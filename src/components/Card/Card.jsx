import React from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
    const { rapper, cardVsCardCheck, hideDeck } = props;
    const flipStyles = hideDeck ? styles.flipCard : "";
    
    return (
        <div className={`${styles.card} ${flipStyles}`}>
            <div className={styles.front}>
                <CardFront rapper={rapper} cardVsCardCheck={cardVsCardCheck} />
            </div>
            <div className={styles.back}>
                <CardBack rapper={rapper} cardVsCardCheck={cardVsCardCheck} />
            </div>
        </div>
    );
};

export default Card;