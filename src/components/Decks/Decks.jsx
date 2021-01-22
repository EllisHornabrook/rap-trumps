import React, { useState } from 'react';
import Card from "../Card/Card";
import styles from "./Decks.module.scss";
import ResultPanel from "../ResultPanel";

const Decks = (props) => {
    const { firstDeck, setFirstDeck, secondDeck, setSecondDeck } = props;
    const [determinedResult, setDeterminedResult] = useState("");
    const [hideDeck, setHideDeck] = useState(true);
    const [blocked, setBlocked] = useState(false);
    const clickBlocker = blocked ? styles.blockPlayer : "";

    const refactorCards = (cardValue) => {
        if (typeof cardValue === "string") {
            return parseFloat(
                cardValue
                    .replace(`.`, `1`)
                    .replace(`10"`, `9.1`)
                    .replace(`11"`, `9.2`)
                    .replace(` Million`, ``)
                    .replace(` Billion`, `1`)
                    .replace(/[,"']/gm, ``)
            );
        } else {
            return cardValue;
        };
    };

    const cardVsCardCheck = (option) => {
        const firstCardValue = refactorCards(firstDeck[firstDeck.length-1][`${option}`]);
        const secondCardValue = refactorCards(secondDeck[secondDeck.length-1][`${option}`]);

        if (firstCardValue > secondCardValue) {
            changeCards(secondDeck, firstDeck, firstDeck, firstDeck);
            setDeterminedResult("Player");
            setHideDeck(false);
        } else if (secondCardValue > firstCardValue) {
            changeCards(firstDeck, secondDeck, secondDeck, secondDeck);
            setDeterminedResult("Computer");
            setHideDeck(false);
        } else {
            changeCards(firstDeck, firstDeck, secondDeck, secondDeck);
            setDeterminedResult("Draw");
            setHideDeck(false);
        };
    };

    const moveCards = (moveOne, moveTwo, moveThree, moveFour) => {
        const firstCardUpdate = moveOne.pop();
        moveTwo.unshift(firstCardUpdate);
        const secondCardUpdate = moveThree.pop();
        moveFour.unshift(secondCardUpdate);
    };

    const changeCards = (moveOne, moveTwo, moveThree, moveFour) => {
        setTimeout(() => {
            setHideDeck(true);
            setDeterminedResult("");
        }, 3000);
        setTimeout(() => {
            moveCards(moveOne, moveTwo, moveThree, moveFour);
            setFirstDeck([...firstDeck]);
            setSecondDeck([...secondDeck]);
        }, 3100);
    };

    return (
        <div className={styles.decks}>
            <div className={styles.cardCount}>
                <h2>{firstDeck.length}</h2>
                <h2>{secondDeck.length}</h2>
            </div>
            <div className={`${styles.firstDeck} ${clickBlocker}`}>
                {firstDeck.map((rapper, index) => (
                    <Card
                        key={index}
                        rapper={rapper}
                        cardVsCardCheck={cardVsCardCheck}
                        setBlocked={setBlocked}
                    />
                ))}
            </div>
            <div className={styles.secondDeck}>
                {secondDeck.map((rapper, index) => (
                    <Card
                        key={index}
                        rapper={rapper}
                        cardVsCardCheck={cardVsCardCheck}
                        hideDeck={hideDeck}
                    />
                ))}
            </div>
            <ResultPanel determinedResult={determinedResult} />
        </div>
    );
};

export default Decks;
