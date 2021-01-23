import React from "react";
import styles from "./Card.module.scss";
import CardFront from "../../components/CardFront";
import CardBack from "../../components/CardBack";

const Card = (props) => {
    const { rapper, cardVsCardCheck, hideDeck, setBlocked } = props;
    const flipStyles = hideDeck ? styles.flipCard : "";
    
    const handleBlocker = () => {
        setBlocked(true);
        setTimeout(() => {
            setBlocked(false);
        }, 3100);
    };
    
    return (
        <div className={`${styles.card} ${flipStyles}`}>
            <div className={styles.front}>
                <CardFront
                    rapper={rapper}
                    cardVsCardCheck={cardVsCardCheck}
                    handleBlocker={handleBlocker}
                />
            </div>
            <div className={styles.back}>
                <CardBack />
            </div>
        </div>
    );
};

export default Card;