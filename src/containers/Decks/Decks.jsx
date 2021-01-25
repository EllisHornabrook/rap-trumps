import React, { useState } from 'react';
import Card from "../../containers/Card";
import styles from "./Decks.module.scss";
import CardCount from "../../components/CardCount";
import ResultPanel from "../../components/ResultPanel";
import OpponentOption from "../../utils/opponentOption";
import refactorCards from "../../utils/refactorCards";
import moveCards from "../../utils/moveCards";

const Decks = (props) => {
    const { 
        firstDeck,
        setFirstDeck,
        secondDeck,
        setSecondDeck,
        blocked,
        setBlocked
    } = props;
    const [determinedResult, setDeterminedResult] = useState("");
    const [hideDeck, setHideDeck] = useState(true);
    const [playerTurn, setPlayerTurn] = useState(true);
    const clickBlocker = blocked || playerTurn === false ? styles.blockPlayer : "";

    const cardVsCardCheck = (option) => {
        const firstCardValue = refactorCards(firstDeck[firstDeck.length-1][`${option}`]);
        const secondCardValue = refactorCards(secondDeck[secondDeck.length-1][`${option}`]);

        if (firstCardValue > secondCardValue) {
            setPlayerTurn(true);
            changeCards(secondDeck, firstDeck, firstDeck, firstDeck);
            setDeterminedResult("Player");
            setHideDeck(false);
        } else if (secondCardValue > firstCardValue) {
            setPlayerTurn(false);
            changeCards(firstDeck, secondDeck, secondDeck, secondDeck);
            setDeterminedResult("Opponent");
            setHideDeck(false);
            handleOpponent();
        } else {
            changeCards(firstDeck, firstDeck, secondDeck, secondDeck);
            setDeterminedResult("Draw");
            setHideDeck(false);
        };
    };

    const handleOpponent = () => {
        setTimeout(() => {
            if (firstDeck.length >= 1 && secondDeck.length >= 1) {
                cardVsCardCheck(OpponentOption());
            };
        }, 7000);
    };

    const changeCards = (moveOne, moveTwo, moveThree, moveFour) => {
        setBlocked(true);
        setTimeout(() => {
            setHideDeck(true);
            setDeterminedResult("");
            moveCards(moveOne, moveTwo, moveThree, moveFour);
        }, 3000);
        setTimeout(() => {
            setFirstDeck([...firstDeck]);
            setSecondDeck([...secondDeck]);
            setBlocked(false);
        }, 3100);
    };

    return (
        <div className={styles.decks}>
            <CardCount firstDeck={firstDeck} secondDeck={secondDeck} playerTurn={playerTurn} />
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
